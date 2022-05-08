import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { PageModule } from 'app/pages/page.module';
import { SharedModule } from 'app/shared/shared.module';

import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  imports: [
    CommonModule,
    PageModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    AdminLayoutComponent
  ]
})

export class AdminLayoutModule { }
