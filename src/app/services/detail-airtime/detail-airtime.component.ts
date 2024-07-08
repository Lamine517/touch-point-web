import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-airtime',
  templateUrl: './detail-airtime.component.html',
  styleUrls: ['./detail-airtime.component.css']
})
export class DetailAirtimeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  Finish() {
    Swal.fire({
      title: 'Successful',
      text: "Your transaction was successful",
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
       this.router.navigate(['/services/airtime'])
      }
    })
  }

  tablist: { img: string, title: string, controls: string, selected: boolean, id: string }[] = [
    { img: 'assets/images/mtn.png', title: 'MTN', controls: 'nav-mtn', selected: true, id: 'nav-mtn-tab' },
    { img: 'assets/images/airtel.png', title: 'Airtel', controls: 'nav-airtel', selected: false, id: 'nav-airtel-tab' },
    { img: 'assets/images/glo.png', title: 'Glo', controls: 'nav-glo', selected: false, id: 'nav-glo-tab' },
    { img: 'assets/images/mobil.png', title: '9mobile', controls: 'nav-9mobile', selected: false, id: 'nav-9mobile-tab' },
  ]
}
