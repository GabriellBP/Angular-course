import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Constants from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router, private http: HttpClient) { }

  doLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return this.http.get<any>(Constants.API_V1_URL + 'user');
  }

  doLogin(username, password): Observable<boolean> {
    return this.http.post<boolean>(Constants.API_URL + 'api-auth-token', {username, password});
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }
}
