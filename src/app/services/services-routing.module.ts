import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../core/main/main.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { DetailAirtimeComponent } from './detail-airtime/detail-airtime.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      { path:'airtime',component:AirtimeComponent },
      {path:'airtime/detail' , component: DetailAirtimeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
