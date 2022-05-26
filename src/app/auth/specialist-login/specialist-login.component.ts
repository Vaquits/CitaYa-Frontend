import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiCitaYaService } from 'app/services/api-cita-ya.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selector: 'app-specialist-login',
  templateUrl: './specialist-login.component.html',
  styleUrls: ['./specialist-login.component.scss']
})
export class SpecialistLoginComponent implements OnInit {

  constructor(
    private apiCitaYaService: ApiCitaYaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginSpecialistForm = this.formBuilder.group({
    documentNumber: '',
    password: ''
  })

  redirectUserDashboard() {
    this.router.navigate(["/specialist-dashboard"]).then(() => {
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
    };
  }

  specialistLoginEntry() {
    if (
      this.loginSpecialistForm.value["documentNumber"] === "" ||
      this.loginSpecialistForm.value["password"] === ""
    ) {
      this.openMessage("Falta información", "Cerrar");
    } else {
      this.apiCitaYaService.specialistLogin(this.loginSpecialistForm.value).subscribe((data: ResponseLoginSuccessfully) => {
        this.setMenuDataInLocalStorage(data);
      });
    }
  }
}
