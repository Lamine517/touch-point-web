import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../core/main/main.component';
import { DetailTicketingComponent } from './detail-ticketing/detail-ticketing.component';
import { FaqComponent } from './faq/faq.component';
import { FormationsComponent } from './formations/formations.component';
import { TicketignsComponent } from './ticketigns/ticketigns.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'ticketings', component: TicketignsComponent },
      { path: 'detail/ticketings', component: DetailTicketingComponent },
      { path: 'formations', component: FormationsComponent },
      { path: 'faq', component: FaqComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
