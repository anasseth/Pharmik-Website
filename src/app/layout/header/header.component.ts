import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart/Cart-Model';
import { CartService } from 'src/app/Service/Cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public _CartService: CartService
  ) { }

  ngOnInit(): void {
  }

  Goto() {
    this.router.navigate(['/Aboutus']);
    console.log("afnan")
  }

  Goto1() {
    this.router.navigate(['/Contactus']);
  }

  Goto2() {
    this.router.navigate(['/Blog']);
  }

  Goto3() {
    this.router.navigate(['/Shop']);
  }

  Goto4() {
    this.router.navigate(['/Faqs']);
  }

  Goto5() {
    this.router.navigate(['/Shoppingcart']);
  }

}
