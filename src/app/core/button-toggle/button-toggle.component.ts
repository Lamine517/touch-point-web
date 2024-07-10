import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ButtonToggleComponent {

  @Input() sidenav!: MatSidenav;



}
