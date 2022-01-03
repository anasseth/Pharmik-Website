import { Component, OnInit } from '@angular/core';
import { CustomerQueryService } from '../Service/Customer-Info/customer-query.service';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  customerQueryObject: any;
  customerQueryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    number: ['', Validators.required],
    query: ['', Validators.required],
  })

  constructor(
    public _CustomerQueryService: CustomerQueryService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.customerQueryObject = {
      name: null,
      email: null,
      number: null,
      query: null
    }
  }

  postCustomerQuery() {
    console.log("Customer Object : ", this.customerQueryObject)
    if (
      (this.customerQueryObject.name == null || this.customerQueryObject.name == "") ||
      (this.customerQueryObject.email == null || this.customerQueryObject.email == "") ||
      (this.customerQueryObject.number == null || this.customerQueryObject.number == "") ||
      (this.customerQueryObject.query == null || this.customerQueryObject.query == "")
    ) {
      alert("Your Form Has Error !")
    }
    else {
      this._CustomerQueryService.postCustomerQuery(this.customerQueryObject).subscribe(
        data => {
          console.log("Customer Query Posted Successfully")
          alert("Customer Query Posted Successfully")
        }, err => {
          console.log(err)
        }, () => {
          this.resetForm()
        }
      )
    }
  }

  resetForm() {
    this.customerQueryObject.name = null;
    this.customerQueryObject.email = null;
    this.customerQueryObject.number = null;
    this.customerQueryObject.query = null;
  }


}
