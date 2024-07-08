import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../core/main/main.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { 
      path:'',
      component:MainComponent,
      children:[
        { path:'',component:DashboardComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
