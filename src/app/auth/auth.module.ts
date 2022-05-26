import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RegisterComponent } from './register/register.component';
import { SpecialistLoginComponent } from './specialist-login/specialist-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'app/material/material.module';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class AuthModule { }
