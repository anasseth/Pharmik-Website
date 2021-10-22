import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  Goto() {
    this.router.navigate(['/Aboutus']);
    console.log("afnan")


  }
  Goto1() {
    this.router.navigate(['/Contactus']);
    console.log("afnan")


  }
  Goto2() {
    this.router.navigate(['/Blog']);
    console.log("afnan")


  }
  Goto3() {
    this.router.navigate(['/Shop']);
    console.log("afnan")


  }
  Goto4() {
    this.router.navigate(['/Faqs']);
    console.log("afnan")


  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoHeight: true,
    autoWidth: true,
    dots: false,
    navSpeed: 7000,
    nav: true,
    navText: ['', ''],
    items: 1,
    // margin: 10,
    responsive: {
      0: {
        items: 1
      }
    },
}
}
