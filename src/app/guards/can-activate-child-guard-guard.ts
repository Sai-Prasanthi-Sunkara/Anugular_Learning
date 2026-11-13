import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canActivateChildGuardGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const isLoggedIn = false;
  if (isLoggedIn) {
    return true;
  }
  return router.createUrlTree(['/pages_routing/about']);
};
