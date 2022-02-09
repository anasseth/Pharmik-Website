import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteInfoService } from 'src/app/Service/WebsiteInfo/webinfo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public _WebsiteInfoService: WebsiteInfoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
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
