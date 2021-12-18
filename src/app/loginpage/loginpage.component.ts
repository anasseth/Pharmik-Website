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
    navSpeed: 700,
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


  Medidata: any[] = [{
    name: "Med 1", url: './../../assets/images/bg1-removebg-preview.png', price: "$200"

  },
  {
    name: "Med 2", url: './../../assets/images/bg2-removebg-preview.png', price: "$230"

  }, {
    name: "Med 3", url: './../../assets/images/bg3-removebg-preview.png', price: "$20"

  }, {
    name: "Med 4", url: './../../assets/images/bg4-removebg-preview.png', price: "$300"

  },
  {
    name: "Med 5", url: './../../assets/images/bg5-removebg-preview.png', price: "$100"

  },
  {
    name: "Med 5", url: './../../assets/images/bg6-removebg-preview.png', price: "$100"

  },
  {
    name: "Med 5", url: './../../assets/images/bg7-removebg-preview.png', price: "$100"

  },
  {
    name: "Med 5", url: './../../assets/images/bg8-removebg-preview.png', price: "$100"

  },
  {
    name: "Med 5", url: './../../assets/images/bg9-removebg-preview.png', price: "$100"

  },{
    name: "Med 5", url: './../../assets/images/bg10-removebg-preview.png', price: "$100"

  },]
}
