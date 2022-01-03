import { Component, OnInit } from '@angular/core';
import { WebsiteInfoService } from 'src/app/Service/WebsiteInfo/webinfo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public _WebsiteInfoService:WebsiteInfoService
  ) { }

  ngOnInit(): void {
  }

}
