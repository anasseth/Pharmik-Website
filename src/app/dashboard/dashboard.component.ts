import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Placecard: string[] = ['USA', 'Maldive', 'Turkey', 'Baku'];

  Placecard: any[] = [{
    name: "Arena beach Maldive", url: './../../assets/images/maldive.png',

  },
  {
    name: "Baku Azerbaijan", url: './../../assets/images/baku.png',

  }, {
    name: "Instanbul Turkey", url: './../../assets/images/turkey.png',

  }, {
    name: "Berlin Germany", url: './../../assets/images/Germany.png',

  },]
  // }, {
  //   name: "Berlin Germany", url: './../../assets/images/Germany.png',

  // }, {
  //   name: "Berlin Germany", url: './../../assets/images/Germany.png',

  // }, {
  //   name: "Berlin Germany", url: './../../assets/images/Germany.png',

  // },







  constructor() { }
  ngOnInit(): void {
  }

}
