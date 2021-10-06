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


  
Goto(){
  this.router.navigate(['/Dashboard']);
  console.log("afnan")

  // alert("clicked me!");

}
}
