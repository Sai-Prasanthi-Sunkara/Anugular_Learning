import { CanMatchFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject, Inject } from '@angular/core';

export const canMatchauthGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const isLoggedIn = true;
  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/pages_routing/home']);
};
