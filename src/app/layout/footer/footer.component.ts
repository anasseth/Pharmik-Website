import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Service/Categories/categories.service';
import { WebsiteInfoService } from 'src/app/Service/WebsiteInfo/webinfo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  show: boolean = true;
  constructor(
    public _WebsiteInfoService: WebsiteInfoService,
    public _CategoryService: CategoriesService,

    private router: Router,
  ) { }

  ngOnInit(): void {
    this._CategoryService.loadAllCategories();

  }

  Goto() {
    this.router.navigate(['/Aboutus']);

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

  Goto6() {
    this.router.navigate(['']);
  }



}
