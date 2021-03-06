import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ErrorsRoutes { }