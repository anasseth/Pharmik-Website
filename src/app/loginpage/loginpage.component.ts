import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
}
