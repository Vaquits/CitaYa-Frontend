import { Component, OnInit } from "@angular/core";
import { ApiCitaYaService } from "app/services/api-cita-ya.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

interface DocumentType {
  id: number;
  shortName: string;
}

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
  ) {}

  ngOnInit(): void {}

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

  openMessage(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action);
    if (message !== "Falta información") {
      snackBarRef.afterDismissed().subscribe(() => {
        this.router.navigate(["/user-login"]).then(() => {
          window.location.reload();
        });
      });
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
      this.apiCitaYaService.newUser(this.userForm.value).subscribe(() => {
        this.openMessage("¡Usuario registrado!", "Ir a inicio de sesión");
      });
    }
  }
}
