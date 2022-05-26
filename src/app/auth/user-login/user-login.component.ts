import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiCitaYaService } from 'app/services/api-cita-ya.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DocumentType {
  id: number;
  shortName: string;
}

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  menuItems: any[];

  constructor(
    private apiCitaYaService: ApiCitaYaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    localStorage.setItem('menu', JSON.stringify(this.menuItems));
  }

  documentTypes: DocumentType[] = [
    { id: 0, shortName: 'CC' },
    { id: 1, shortName: 'TI' },
    { id: 2, shortName: 'RC' },
    { id: 3, shortName: 'PS' }
  ]

  loginForm = this.formBuilder.group({
    documentType: "",
    documentNumber: "",
    password: ""
  })

  openMessage(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action);
    if (message !== "Falta información") {
      snackBarRef.afterDismissed().subscribe();
    }
  }

  userLoginEntry() {
    if (
      this.loginForm.value["documentType"] === "" ||
      this.loginForm.value["documentNumber"] === "" ||
      this.loginForm.value["password"] === ""
    ) {
      this.openMessage("Falta información", "Cerrar");
    } else {
      this.apiCitaYaService.userLogin(this.loginForm.value).subscribe((data: {}) => {
        console.log("un mensaje cualquiera: ", data);
        /*
        this.router.navigate(["/user-dashboard"]).then(() => {
          window.location.reload();
        });
        */
      });
    }
  }
}
