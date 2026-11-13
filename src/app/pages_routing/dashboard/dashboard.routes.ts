import { Dashboard } from './dashboard';
import { Dashboardhom } from './dashboardhom/dashboardhom';
import { Settings } from './settings/settings';
import { Orders } from './orders/orders';
import { Profile } from './profile/profile';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    // component: Dashboard,

    children: [
      {
        path: '',
        redirectTo: 'dashboardhom',
        pathMatch: 'full',
      },
      {
        path: 'dashboardhom',
        // component: Dashboardhom,
        loadComponent: () =>
          import('../dashboard/dashboardhom/dashboardhom').then((c) => c.Dashboardhom),
      },
      {
        path: 'profile',
        loadComponent: () => import('../dashboard/profile/profile').then((c) => c.Profile),
        // component: Profile,
      },
      {
        path: 'settings',
        // component: Settings,
        loadComponent: () => import('../dashboard/settings/settings').then((c) => c.Settings),
      },
      {
        path: 'orders',
        // component: Orders,
        loadComponent: () => import('../dashboard/orders/orders').then((c) => c.Orders),
      },
    ],
  },
];
