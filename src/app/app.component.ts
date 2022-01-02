import { Component, OnInit } from '@angular/core';
import { FaqsService } from './Service/FAQ/faq.service';
import { ProductsService } from './Service/Product/product.service';
import { CategoriesService } from './Service/Categories/categories.service';

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
    public _CategoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this._ProductService.getAllProducts();
    this._FAQService.getAllFAQs();
    this._CategoriesService.getAllCategories();
  }
}
