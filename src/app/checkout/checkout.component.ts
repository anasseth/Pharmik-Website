import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { Checkout } from '../Models/Checkout/Checkout-Model';
import { CartService } from '../Service/Cart/cart.service';
import { Router } from '@angular/router';
import { CheckoutService } from '../Service/Checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  billingAmount: any = 0;
  checkoutObject: any = {};

  checkoutForm: FormGroup = this.fb.group({
    uniqueOrderNumber: ['', Validators.required],
    trackingID: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email_address: ['', Validators.required],
    mobile: ['', Validators.required],
    company_name: ['', Validators.required],
    address_line_one: ['', Validators.required],
    address_line_two: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
    regionOrState: ['', Validators.required],
    orderNotes: ['', Validators.required],
    paymentType: ['', Validators.required],
    creditCardType: ['', Validators.required],
  })

  constructor(
    public fb: FormBuilder,
    public _CartService: CartService,
    public _CheckoutService: CheckoutService,
    public Router: Router
  ) { }

  ngOnInit(): void {
    // if (this._CartService.NewCart != null || this._CartService.NewCart != null) {
    //   this.Router.navigate(["/"])
    // }
    this.calculateBilling();
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

  Order_Number_Generator() {
    return 'xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16).toUpperCase();
    });
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
    this.billingAmount = billingAmount;
  }

  submitBillingInformation() {
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
          },
          (err) => {
            console.log(err)
          }, () => {
            console.log("Cart Posted Successfully")
          }
        )
      }
    )

  }

}
