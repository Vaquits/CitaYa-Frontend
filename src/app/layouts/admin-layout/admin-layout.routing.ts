import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from 'app/pages/table-list/table-list.component';
import { TypographyComponent } from 'app/pages/typography/typography.component';
import { NotificationsComponent } from 'app/pages/notifications/notifications.component';
import { UpgradeComponent } from 'app/pages/upgrade/upgrade.component';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'user-profile', component: UserProfileComponent },
            { path: 'table-list', component: TableListComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'upgrade', component: UpgradeComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminLayoutRoutes { }