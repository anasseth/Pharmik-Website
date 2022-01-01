import { Component, OnInit } from '@angular/core';
import { FaqsService } from '../Service/FAQ/faq.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor(
    public _FAQService: FaqsService
  ) { }

  ngOnInit(): void {
    this._FAQService.getAllFAQs
  }

}
