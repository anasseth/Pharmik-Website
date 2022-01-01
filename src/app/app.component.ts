import { Component, OnInit } from '@angular/core';
import { FaqsService } from './Service/FAQ/faq.service';
import { ProductsService } from './Service/Product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'travella';

  constructor(
    public _ProductService: ProductsService,
    public _FAQService: FaqsService
  ) { }

  ngOnInit(): void {
    this._ProductService.getAllProducts();
    this._FAQService.getAllFAQs();
  }
}
