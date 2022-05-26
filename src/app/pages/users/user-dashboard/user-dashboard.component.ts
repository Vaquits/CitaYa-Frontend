import { Component, OnInit } from "@angular/core";
import { ApiCitaYaService } from "app/services/api-cita-ya.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent implements OnInit {

  userAppointmentsList: any = [];

  constructor(private apiCitaYaService: ApiCitaYaService) {}

  ngOnInit(): void {
    this.getAllUserAppointments();
  }

  getAllUserAppointments() {
    let currentUser = localStorage.getItem("michi"); // ?????????????????????????????????
    console.log("mensaje:", currentUser)
    this.apiCitaYaService
      .userAppointmentsData(currentUser)
      .subscribe((data: {}) => {
        this.userAppointmentsList = data;
    });
  }
}
