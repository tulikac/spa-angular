import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Product } from './pages/product';

export const routes: Routes = [
  { path: '', component: Home, title: 'Angular SPA' },
  {
    path: 'products/widget-1',
    component: Product,
    title: 'Widget 1 | Angular SPA',
  },
  { path: '**', component: NotFound, title: 'Page not found | Angular SPA' },
];
