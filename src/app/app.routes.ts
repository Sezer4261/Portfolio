import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'imprint', loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal), data: { page: 'imprint' } },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/legal/legal').then((m) => m.Legal),
    data: { page: 'privacy' },
  },
  { path: '**', redirectTo: '' },
];
