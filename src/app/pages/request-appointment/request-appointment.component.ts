import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { ApiCitaYaService } from "app/services/api-cita-ya.service";

interface ServiceType {
  id: number;
  serviceName: string;
}

@Component({
  selector: "app-request-appointment",
  templateUrl: "./request-appointment.component.html",
  styleUrls: ["./request-appointment.component.scss"],
})
export class RequestAppointmentComponent implements OnInit {
  constructor(
    private apiCitaYaService: ApiCitaYaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  serviceTypes: ServiceType[] = [
    { id: 1, serviceName: "Medicina general" },
    { id: 2, serviceName: "Odontología" },
    { id: 3, serviceName: "Especialidades médicas" },
  ];

  appointmentForm = this.formBuilder.group({
    serviceId: "",
    serviceType: "",
    date: "",
    hour: "",
    active: true
    //user: ""
  });

  openMessage(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action);
    if (message !== "Falta información") {
      snackBarRef.afterDismissed().subscribe(() => {
        this.router.navigate(["/user-dashboard"]).then(() => {
          window.location.reload();
        });
      });
    }
  }

  newRequestAppointmentEntry() {
    if (
      this.appointmentForm.value["serviceType"] === "" ||
      this.appointmentForm.value["date"] === "" ||
      this.appointmentForm.value["hour"] === ""
    ) {
      this.openMessage("Falta información", "Cerrar");
    } else {
      this.apiCitaYaService
        .requestAppointment(this.appointmentForm.value)
        .subscribe(() => {
          this.openMessage("¡Cita registrada!", "Ir al inicio");
        });
    }
  }
}
