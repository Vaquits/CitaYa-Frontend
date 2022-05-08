import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutes } from './auth/auth.routing';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';
import { ErrorsRoutes } from './errors/error.routing';

import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    AuthRoutes,
    AdminLayoutRoutes,
    ErrorsRoutes
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
