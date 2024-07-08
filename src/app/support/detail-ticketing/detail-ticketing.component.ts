import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-ticketing',
  templateUrl: './detail-ticketing.component.html',
  styleUrls: ['./detail-ticketing.component.css']
})
export class DetailTicketingComponent implements OnInit {

  constructor( private router : Router) {


   }

   detailTicket() {
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
