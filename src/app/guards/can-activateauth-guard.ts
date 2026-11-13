import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const canActivateauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = false;
  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/pages_routing/home']);
};
