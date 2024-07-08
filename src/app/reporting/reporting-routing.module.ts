import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../core/main/main.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [

  {
    path:'',
    component: MainComponent,
    children:[
      { path:'',component:TransactionsComponent },
 ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
