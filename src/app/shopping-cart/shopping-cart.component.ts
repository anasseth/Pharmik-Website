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

  constructor(
    private router: Router,
    public _CartService: CartService
  ) { }

  ngOnInit(): void {
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
  }

  removeItem(item: any, i: any) {
    this._CartService.NewCart.items.splice(i, i + 1);
    console.log("Cart : ", this._CartService.NewCart)
  }

  clearCart() {
    this._CartService.NewCart.items.length = 0
  }

  applyCoupon() {
    this._CartService.NewCart.couponCode = this.couponCode;
    this._CartService.NewCart.couponApplied = true;
  }
}
