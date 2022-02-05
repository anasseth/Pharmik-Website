import { Component, OnInit } from '@angular/core';
import { FaqsService } from './Service/FAQ/faq.service';
import { ProductsService } from './Service/Product/product.service';
import { CategoriesService } from './Service/Categories/categories.service';
import { WebsiteInfoService } from './Service/WebsiteInfo/webinfo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from './Service/Cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'travella';

  constructor(
    public _ProductService: ProductsService,
    public _FAQService: FaqsService,
    public _CategoriesService: CategoriesService,
    public _WebsiteInfo: WebsiteInfoService,
    private spinner: NgxSpinnerService,
    public _CartService: CartService,
    public Router: Router
  ) { }

  ngOnInit(): void {
    // if (this._CartService.NewCart == null || this._CartService.NewCart == undefined || this._CartService.NewCart.typesOfPill.length == 0) {
    //   this.Router.navigate(["/Shop"])
    // }
    this._ProductService.getAllProducts();
    this._FAQService.getAllFAQs();
    this._CategoriesService.getAllCategories();
    this._WebsiteInfo.getWebsiteInfo();

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}

