import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthModule } from './auth/auth.module';
import { ErrorModule } from './errors/error.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AdminLayoutModule,
    AuthModule,
    ErrorModule
  ],
  declarations: [
    AppComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
