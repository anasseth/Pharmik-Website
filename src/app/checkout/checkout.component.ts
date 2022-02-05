import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Checkout } from '../Models/Checkout/Checkout-Model';
import { CartService } from '../Service/Cart/cart.service';
import { Router } from '@angular/router';
import { CheckoutService } from '../Service/Checkout/checkout.service';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  modalRef: any;
  @ViewChild('myModal') myModal: any;

  billingAmount: any = 0;
  checkoutObject: any = {};
  trackingIDofCustomer: any = "";
  shippingCharges: any = 0;

  checkoutForm: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email_address: ['', Validators.required, ,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
    mobile: ['', Validators.required],
    company_name: [''],
    address_line_one: ['', Validators.required],
    address_line_two: [''],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
    regionOrState: ['', Validators.required],
    orderNotes: [''],
    paymentType: ['', Validators.required],
    creditCardType: [''],
  })

  constructor(
    public fb: FormBuilder,
    public _CartService: CartService,
    public _CheckoutService: CheckoutService,
    public Router: Router,
    public modalService: ModalManager
  ) { }

  ngOnInit(): void {
    // if (this._CartService.NewCart != null || this._CartService.NewCart != null) {
    //   this.Router.navigate(["/"])
    // }
    if (this._CartService.NewCart == null || this._CartService.NewCart == undefined) {
      this.Router.navigate(["/Shop"])
    }
    this.calculateBilling();
    this.checkoutObject = {
      first_name: null,
      last_name: null,
      email_address: null,
      mobile: null,
      company_name: null,
      address_line_one: null,
      address_line_two: null,
      city: null,
      postcode: null,
      country: null,
      regionOrState: null,
      orderNotes: null,
      paymentType: null,
      creditCardType: null,
    }
  }

  Order_Number_Generator() {
    return 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16).toUpperCase();
    });
  }

  clickPickup() {
    this.shippingCharges = 0;
    this.calculateBilling();
  }

  clickShipping() {
    this.shippingCharges = 10;
    this.calculateBilling();
  }

  Tracking_ID_Generator() {
    return 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16).toUpperCase();
    });
  }

  calculateBilling() {
    var itemBlling = this._CartService.NewCart.items;
    var billingAmount = 0;
    for (var i = 0; i < itemBlling.length; i++) {
      billingAmount = billingAmount + Number(itemBlling[i].price * itemBlling[i].quantity)
    }
    this.billingAmount = billingAmount + this.shippingCharges;
  }

  submitBillingInformation() {
    this.trackingIDofCustomer = this.checkoutObject.trackingID;
    let orderNumber = this.Order_Number_Generator();
    this.checkoutObject.uniqueOrderNumber = orderNumber;

    let trackingID = this.Tracking_ID_Generator();
    this.checkoutObject.trackingID = trackingID;

    this._CartService.NewCart.uniqueOrderNumber = orderNumber;
    this._CartService.NewCart.trackingID = trackingID;
    this._CartService.NewCart.checkout = "Completed";
    this._CartService.NewCart.totalCost = this.billingAmount;
    this._CartService.NewCart.orderDate = new Date();
    this._CartService.NewCart.orderStatus = "Pending";
    this._CartService.NewCart.paymentType = this.checkoutObject.paymentType

    console.log("Checkout Object : ", this.checkoutObject)
    console.log("Checkout Object : ", JSON.stringify(this.checkoutObject, undefined, 3))
    console.log("Cart Object : ", this._CartService.NewCart)
    console.log("Cart Object : ", JSON.stringify(this._CartService.NewCart, undefined, 3))

    this._CartService.postNewCart().subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
        console.log(err)
      }, () => {
        this._CheckoutService.postNewCheckout(this.checkoutObject).subscribe(
          (data) => {
            console.log(data)
            this.openModal()
            this.resetForm()
          },
          (err) => {
            console.log(err)
            // this.trackingIDofCustomer = null;
          }, () => {
            console.log("Cart Posted Successfully")
          }
        )
      }
    )

  }
  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
  }
  closeModal() {
    this.modalService.close(this.modalRef);
    this.trackingIDofCustomer = null;
    this.Router.navigate(["/"])
  }

  resetForm() {
    this.checkoutObject = {
      uniqueOrderNumber: null,
      trackingID: null,
      first_name: null,
      last_name: null,
      email_address: null,
      mobile: null,
      company_name: null,
      address_line_one: null,
      address_line_two: null,
      city: null,
      postcode: null,
      country: null,
      regionOrState: null,
      orderNotes: null,
      paymentType: null,
      creditCardType: null,
    }
  }

  onCheckoutFormCheck() {
    console.log("Form Validation : ", this.checkoutForm.valid)
    if (this.checkoutForm.valid) {
      console.log("Condition#1")
      this.submitBillingInformation()
      return true;
    } else {
      console.log("Condition#2")
      this.validateAllFormFields(this.checkoutForm);
      return true;
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
