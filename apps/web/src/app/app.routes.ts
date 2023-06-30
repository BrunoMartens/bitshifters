/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: '',
    redirectTo: 'blogs',
    pathMatch: 'full'
  }, {
    path: 'blogs',
    loadChildren: () => import('../../../../libs/blog/src/feature/blog.module').then(m => m.BlogModule)
  }];
