import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { RegisterComponent } from './register/register.component';
import { SpecialistLoginComponent } from './specialist-login/specialist-login.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'specialist-login', component: SpecialistLoginComponent },
    { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutes { }