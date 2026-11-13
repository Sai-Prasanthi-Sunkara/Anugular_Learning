import { Routes } from '@angular/router';
import { Home } from './pages_routing/home/home';
import { About } from './pages_routing/about/about';
import { Products } from './pages_routing/products/products';
import { UserInfo } from './user-info/user-info';

import { Component, signal } from '@angular/core';
import { Register } from './pages_routing/register/register';
import { Login } from './pages_routing/login/login';
import { Filenotfoundpath } from './pages_routing/filenotfoundpath/filenotfoundpath';
import { ProductDetails } from './pages_routing/product-details/product-details';
import { Dashboard } from './pages_routing/dashboard/dashboard';
import { Profile } from './pages_routing/dashboard/profile/profile';
import { Settings } from './pages_routing/dashboard/settings/settings';
import { Orders } from './pages_routing/dashboard/orders/orders';
import { Dashboardhom } from './pages_routing/dashboard/dashboardhom/dashboardhom';
import { canActivateauthGuard } from './guards/can-activateauth-guard';
import { canActivateChildGuardGuard } from './guards/can-activate-child-guard-guard';
import { canDeactivateauthGuard } from './guards/can-deactivateauth-guard';
import { canMatchauthGuard } from './guards/can-matchauth-guard';
import { Signal } from './pages_routing/signal/signal';

export const routes: Routes = [
  // routing paths

  //  {
  //    path:"",
  //     component:Home
  // },

  // default path settings
  {
    path: '',
    redirectTo: 'pages_routing/signal',
    pathMatch: 'full',
  },
  {
    path: 'pages_routing/signal',
    component: Signal,
  },
  {
    path: 'pages_routing/home',
    component: Home,
  },
  {
    path: 'pages_routing/about',
    component: About,
  },
  {
    path: 'pages_routing/products',
    canMatch: [canMatchauthGuard],
    component: Products,
  },
  {
    path: 'pages_routing/login',
    // component: Login,
    loadComponent: () => import('./pages_routing/login/login').then((c) => c.Login),
  },
  {
    path: 'pages_routing/register',
    component: Register,
  },
  {
    path: 'pages_routing/product-details/:id',
    canMatch: [canMatchauthGuard],
    component: ProductDetails,
  },
  {
    path: 'pages_routing/dashboard',
    // canActivate: [canActivateauthGuard],
    // canActivateChild: [canActivateChildGuardGuard],
    // canDeactivate: [canDeactivateauthGuard],
    canMatch: [canMatchauthGuard],
    // component: Dashboard,
    loadComponent: () => import('./pages_routing/dashboard/dashboard').then((c) => c.Dashboard),
    loadChildren: () =>
      import('./pages_routing/dashboard/dashboard.routes').then((c) => c.DASHBOARD_ROUTES),
    //   children: [
    //     {
    //       path: '',
    //       redirectTo: 'dashboardhom',
    //       pathMatch: 'full',
    //     },
    //     {
    //       path: 'dashboardhom',
    //       component: Dashboardhom,
    //     },
    //     {
    //       path: 'profile',
    //       component: Profile,
    //     },
    //     {
    //       path: 'settings',
    //       component: Settings,
    //     },
    //     {
    //       path: 'orders',
    //       component: Orders,
    //     },
    //   ],
  },

  // wildcard path settings

  {
    path: '**',
    component: Filenotfoundpath,
  },
];

// loading the child routes on demand
// children: [
//     {
//       path: '',
//       redirectTo: 'dashboardhom',
//       pathMatch: 'full'
//     },
//     {
//       path: 'dashboardhom',
//       loadComponent: () =>
//         import('./pages_routing/dashboard/dashboardhom/dashboardhom')
//           .then(c => c.Dashboardhom)
//     },
//     {
//       path: 'profile',
//       loadComponent: () =>
//         import('./pages_routing/dashboard/profile/profile')
//           .then(c => c.Profile)
//     },
//     {
//       path: 'settings',
//       loadComponent: () =>
//         import('./pages_routing/dashboard/settings/settings')
//           .then(c => c.Settings)
//     },
//     {
//       path: 'orders',
//       loadComponent: () =>
//         import('./pages_routing/dashboard/orders/orders')
//           .then(c => c.Orders)
//     }
//   ]
