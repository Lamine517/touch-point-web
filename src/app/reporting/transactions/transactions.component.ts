import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }

  tablist: { img: string, title: string, controls: string, selected: boolean, id: string }[] = [
    { img: 'assets/images/om.png', title: 'Orange Money', controls: 'nav-om', selected: true, id: 'nav-om-tab' },
    { img: 'assets/images/wave.png', title: 'Wave', controls: 'nav-wave', selected: false, id: 'nav-wave-tab' },
    { img: 'assets/images/ria.png', title: 'Ria', controls: 'nav-ria', selected: false, id: 'nav-ria-tab' },
    { img: 'assets/images/airtel.png', title: 'Airtel', controls: 'nav-airtel', selected: false, id: 'nav-airtel-tab' },
    { img: 'assets/images/airtel-mobile.png', title: 'Airtel Mobile', controls: 'nav-airtel-mobile', selected: false, id: 'nav-airtel-mobile-tab' },
    { img: 'assets/images/wizall.png', title: 'Wizall', controls: 'nav-wizall', selected: false, id: 'nav-wizall-tab' },
    { img: 'assets/images/yoome.png', title: 'Yoome', controls: 'nav-yoome', selected: false, id: 'nav-yoome-tab' },
    { img: 'assets/images/tailmob.png', title: 'Tailmob', controls: 'nav-tailmob', selected: false, id: 'nav-tailmob-tab' },
    { img: 'assets/images/senelec.png', title: 'Senelec', controls: 'nav-senelec', selected: false, id: 'nav-senelec-tab' },
    { img: 'assets/images/starrtimes.png', title: 'Starrtimes', controls: 'nav-starrtimes', selected: false, id: 'nav-starrtimes-tab' },
    { img: 'assets/images/freemoney.png', title: 'Freemoney', controls: 'nav-freemoney', selected: false, id: 'nav-freemoney-tab' },
    { img: 'assets/images/kash.png', title: 'Kash', controls: 'nav-kash', selected: false, id: 'nav-kash-tab' }
  ]

}
