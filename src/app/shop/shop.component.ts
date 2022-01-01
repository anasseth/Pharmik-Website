import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { ProductsService } from '../Service/Product/product.service';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  private modalRef: any;
  selectedChild: number = 0;
  changeTypeDetection: any = [];

  @ViewChild('myModal') myModal: any;

  constructor(
    private modalService: ModalManager,
    public _ProductService: ProductsService,
    public _CartService: CartService
  ) { }

  ngOnInit(): void {
    this._ProductService.getAllProducts();
  }

  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
      size: "lg",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
  }

  closeModal() {
    this.modalService.close(this.modalRef);
  }

  setPillTypeValue(item: any, typeID: any, productID: any) {
    this.changeTypeDetection = this.changeTypeDetection.filter((x: any) => x.name != item.name && x.typeID != typeID.target.value);
    // console.log("Index of Product : ", indexOfProduct);
    let specificTypeObject = {
      productName: item.name,
      productID: productID,
      typeID: Number(typeID.target.value)
    }
    this.changeTypeDetection.push(specificTypeObject)
    console.log("Specific Type Object : ", specificTypeObject)
    console.log("Specific Object : ", this.changeTypeDetection)
  }

  onChangeQuantity(product: any, quantityValue: any) {
    product.quantity = quantityValue.value;
    console.log(product)
  }

  addToCart(item: any) {

    if (this._CartService.NewCart == undefined || this._CartService.NewCart == null) {
      this._CartService.NewCart = {
        uniqueOrderNumber: null,
        trackingID: null,
        checkout: null,
        totalCost: null,
        couponApplied: false,
        couponCode: null,
        orderDate: null,
        orderStatus: null,
        paymentType: null,
        creditCardType: null,
        items: []
      }
    }

    var indexOfpillTypeObject = this.changeTypeDetection.filter((x: any) => x.productName == item.name);
    var indexOfpillType;

    if (indexOfpillTypeObject.length == 0) {
      indexOfpillType = 0
    }
    else {
      indexOfpillType = indexOfpillTypeObject[0].typeID
    }

    console.log("Index of Pill Type : ", indexOfpillType)

    let cartItem = {
      productName: item.name,
      quantity: item.quantity,
      category: item.category,
      price: item.typesOfPill[indexOfpillType].our_price,
      pillType: item.typesOfPill[indexOfpillType]
    }

    this.changeTypeDetection = this.changeTypeDetection.filter((x: any) => x.name != item.name)
    console.log("Product Items : ", cartItem)

    this._CartService.NewCart.items.push(cartItem)
    console.log("Cart : ", this._CartService.NewCart)
  }

  quantityChanged(status: string, product: any, quantityValue: any) {
    if (status == "decrement" && product.quantity > 0) {
      product.quantity = Number(product.quantity) - 1;
    }
    else if (status == "increment") {
      product.quantity = Number(product.quantity) + 1;
    }
  }


}
