import { Component, OnInit } from "@angular/core";
import { ApiCitaYaService } from "app/services/api-cita-ya.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

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
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private apiCitaYaService: ApiCitaYaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  documentTypes: DocumentType[] = [
    { id: 0, shortName: "CC" },
    { id: 1, shortName: "TI" },
    { id: 2, shortName: "RC" },
    { id: 3, shortName: "PS" },
  ];

  userForm = this.formBuilder.group({
    documentType: "",
    documentNumber: "",
    names: "",
    surnames: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  newUserEntry() {
    if (
      this.userForm.value["documentType"] === "" ||
      this.userForm.value["documentNumber"] === "" ||
      this.userForm.value["names"] === "" ||
      this.userForm.value["surnames"] === "" ||
      this.userForm.value["email"] === "" ||
      this.userForm.value["password"] === "" ||
      this.userForm.value["confirmPassword"] === ""
    ) {
      this.openMessage("Falta información", "Cerrar");
    } else {
      this.apiCitaYaService.newUser(this.userForm.value).subscribe((data: ResponseLoginSuccessfully) => {
        this.setMenuDataInLocalStorage(data);
      });
    }
  }
}
