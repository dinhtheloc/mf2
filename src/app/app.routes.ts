import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'mf2',
    pathMatch: 'full'
  },
  {
    path: 'mf2',
    loadChildren: () => import('./mf2/mf2.module').then(m => m.Mf2Module),
  }
];
