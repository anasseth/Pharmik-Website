import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//   Goto() {
//     this.router.navigate(['/Aboutus']);
//     console.log("afnan")

// \
//   }

}
