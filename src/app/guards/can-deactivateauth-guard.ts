import { CanDeactivateFn } from '@angular/router';

export const canDeactivateauthGuard: CanDeactivateFn<any> = (component) => {
  const hasUnsavedChanges = true;
  if (hasUnsavedChanges) {
    confirm('are you sure want to leave this page');
  }
  return true;
};
