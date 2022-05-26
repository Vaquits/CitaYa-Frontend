import { Component, OnInit } from "@angular/core";
import { ApiCitaYaService } from "app/services/api-cita-ya.service";

@Component({
  selector: "app-specialist-dashboard",
  templateUrl: "./specialist-dashboard.component.html",
  styleUrls: ["./specialist-dashboard.component.scss"],
})
export class SpecialistDashboardComponent implements OnInit {

  assigmentAppointmentlList: any = []

  constructor(private apiCitaYaService: ApiCitaYaService) {}

  ngOnInit(): void {
    this.getAllAssigmentAppointments();
  }

  getAllAssigmentAppointments() {
    let currentIdSpeciality = localStorage.getItem("speciality");
    this.apiCitaYaService
      .assigmentAppointmentsData(currentIdSpeciality)
      .subscribe((data: {}) => {
        this.assigmentAppointmentlList = data;
      });
  }
}
