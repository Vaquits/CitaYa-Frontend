import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from 'app/pages/table-list/table-list.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { UserDashboardComponent } from 'app/pages/users/user-dashboard/user-dashboard.component';
import { SpecialistDashboardComponent } from 'app/pages/specialists/specialist-dashboard/specialist-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'user-dashboard', component: UserDashboardComponent },
            { path: 'specialist-dashboard', component: SpecialistDashboardComponent },
            { path: 'user-add-date', component: UserProfileComponent },
            { path: 'user-modify-date', component: TableListComponent },
            { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminLayoutRoutes { }