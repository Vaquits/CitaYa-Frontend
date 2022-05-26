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

interface ResponseLoginSuccessfully {
  error: string;
  data: string;
  userMenu: [RouteInfo]
}

export const ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private apiCitaYaService: ApiCitaYaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {

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

  redirectUserDashboard() {
    this.router.navigate(["/user-dashboard"]).then(() => {
      window.location.reload();
    });
  }

  setMenuDataInLocalStorage(data: ResponseLoginSuccessfully) {
    let menuItems: [RouteInfo] = data.userMenu;
    localStorage.setItem('menu', JSON.stringify(menuItems));
    this.redirectUserDashboard();
  }

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
      this.apiCitaYaService.userLogin(this.loginForm.value).subscribe((data: ResponseLoginSuccessfully) => {
        this.setMenuDataInLocalStorage(data);
      });
    }
  }
}
