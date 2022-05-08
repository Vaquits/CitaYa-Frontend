import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { SpecialistLoginComponent } from './specialist-login/specialist-login.component';
import { UserLoginComponent } from './user-login/user-login.component';



@NgModule({
  declarations: [
    RegisterComponent,
    SpecialistLoginComponent,
    UserLoginComponent
  ],
  exports: [
    RegisterComponent,
    SpecialistLoginComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
