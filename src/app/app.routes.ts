import { Routes } from '@angular/router';
import { RecherchePaiementComponent } from './recherche-paiement/recherche-paiement.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentification/authentification.module').then(
        (mod) => mod.AuthentificationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((mod) => mod.ServicesModule),
  },
  {
    path: 'supports',
    loadChildren: () =>
      import('./support/support.module').then((mod) => mod.SupportModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./reporting/reporting.module').then((mod) => mod.ReportingModule),
  },
  {
    path: 'recherche-paiement',
    component: RecherchePaiementComponent
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
