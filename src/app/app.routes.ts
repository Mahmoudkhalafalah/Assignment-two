import { Routes } from '@angular/router';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  }
  , {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },{
    path: 'contact',
    loadComponent: () => import('./components/contact/contact').then(m => m.Contact)
  },

  {
    path: '**',
    loadComponent: () => import('./components/notfound/notfound').then(m => m.Notfound)
  }
];
