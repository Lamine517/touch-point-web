import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    ButtonToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    ButtonToggleComponent
  ]
})
export class CoreModule { }
