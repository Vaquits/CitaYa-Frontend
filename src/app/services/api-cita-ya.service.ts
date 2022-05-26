import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCitaYaService {

  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  apiUrlSignup = 'api/signup'
  apiUrlLogin = 'api/login'
  apiUrlLoginSpecialist = 'api/login_specialist'

  constructor(private http: HttpClient) { }

  newUser(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrlSignup,
      data,
      { headers: this.httpOptions });
  }

  userLogin(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrlLogin,
      data,
      { headers: this.httpOptions });
  }

  specialistLogin(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrlLoginSpecialist,
      data,
      { headers: this.httpOptions });
  }
}