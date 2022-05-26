import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiCitaYaService } from 'app/services/api-cita-ya.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      this.apiCitaYaService.specialistLogin(this.loginSpecialistForm.value).subscribe((data: {}) => {
        console.log("un mensaje cualquiera: ", data);
        /*
        this.router.navigate(["/specialist-dashboard"]).then(() => {
          window.location.reload();
        });
        */
      });
    }
  }
}
