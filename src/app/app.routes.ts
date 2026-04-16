import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'listar-sorteados',
    loadComponent: () => import('./listar-sorteados/listar-sorteados.page').then( m => m.ListarSorteadosPage)
  },
  {
    path: "l",
    redirectTo: 'listar-sorteados',
  }
];
