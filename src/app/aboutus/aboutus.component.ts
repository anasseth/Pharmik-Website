import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsLetterService } from '../Service/NewLetter/news-letter.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  userEmail: any;

  constructor(
    private router: Router,
    public _NewsLetterService: NewsLetterService
  ) { }

  ngOnInit(): void {
  }

  setEmailValue(event: any) {
    this.userEmail = event.target.value
  }

  subscribeToNewsLetter() {
    console.log("User Email : ", this.userEmail)
    if (this.userEmail == "" || this.userEmail == " ") {
      this._NewsLetterService.postUserDataforNewsLetter(this.userEmail).subscribe(
        data => {
          console.log("Successfully Subscribed")
        },
        err => {
          console.log(err)
        }
      )
    }
    else {
      alert("Please Enter Correct Email Address")
    }
  }

}
