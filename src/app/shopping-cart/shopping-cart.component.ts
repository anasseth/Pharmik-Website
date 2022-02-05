import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  couponCode: any = "";
  billingAmount: any = 0;
  shippingCharges: any = 0;

  constructor(
    private router: Router,
    public _CartService: CartService
  ) { }

  ngOnInit(): void {
    this.calculateBilling();
  }

  Goto() {
    this.router.navigate(['/Checkout']);
  }

  quantityChanged(status: string, product: any) {
    if (status == "decrement" && product.quantity > 0) {
      product.quantity = Number(product.quantity) - 1;
    }
    else if (status == "increment") {
      product.quantity = Number(product.quantity) + 1;
    }
    this.calculateBilling()
  }

  removeItem(item: any, i: any) {
    this._CartService.NewCart.items.splice(i, 1);
    console.log("Cart : ", this._CartService.NewCart)
    this.calculateBilling()
  }

  clearCart() {
    this._CartService.NewCart.items.length = 0
    this.calculateBilling()
  }

  applyCoupon() {
    this._CartService.NewCart.couponCode = this.couponCode;
    this._CartService.NewCart.couponApplied = true;
  }

  clickPickup() {
    this.shippingCharges = 0;
    this.calculateBilling();
  }

  clickShipping() {
    this.shippingCharges = 10;
    this.calculateBilling();
  }

  calculateBilling() {
    var itemBlling = this._CartService.NewCart.items;
    var billingAmount = 0;
    for (var i = 0; i < itemBlling.length; i++) {
      billingAmount = billingAmount + Number(itemBlling[i].price * itemBlling[i].quantity)
    }
    this.billingAmount = billingAmount + this.shippingCharges;
  }

}
