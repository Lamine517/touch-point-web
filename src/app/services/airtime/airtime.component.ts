import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.css']
})
export class AirtimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tablist: { img: string, title: string, controls: string, selected: boolean, id: string }[] = [
    { img: 'assets/images/mtn.png', title: 'MTN', controls: 'nav-mtn', selected: true, id: 'nav-mtn-tab' },
    { img: 'assets/images/airtel.png', title: 'Airtel', controls: 'nav-airtel', selected: false, id: 'nav-airtel-tab' },
    { img: 'assets/images/glo.png', title: 'Glo', controls: 'nav-glo', selected: false, id: 'nav-glo-tab' },
    { img: 'assets/images/mobil.png', title: '9mobile', controls: 'nav-9mobile', selected: false, id: 'nav-9mobile-tab' },
  ]
}
