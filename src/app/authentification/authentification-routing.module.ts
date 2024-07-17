import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainguestComponent } from '../core/mainguest/mainguest.component';


const routes: Routes = [
  {
    path: '',
    component: MainguestComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
