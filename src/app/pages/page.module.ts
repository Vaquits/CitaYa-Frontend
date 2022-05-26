import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { SpecialistDashboardComponent } from './specialists/specialist-dashboard/specialist-dashboard.component';
import { RequestAppointmentComponent } from './request-appointment/request-appointment.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NotificationsComponent,
    TableListComponent,
    TypographyComponent,
    UpgradeComponent,
    UserProfileComponent,
    UserDashboardComponent,
    SpecialistDashboardComponent,
    RequestAppointmentComponent
  ],
  exports: [
    DashboardComponent,
    NotificationsComponent,
    TableListComponent,
    TypographyComponent,
    UpgradeComponent,
    UserProfileComponent
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
    MatTooltipModule
  ]
})
export class PageModule { }
