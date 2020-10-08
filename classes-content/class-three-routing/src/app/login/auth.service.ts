import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private router: Router) {

  }

  doLogout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  doLogin(username, password) {
    if (username == 'asus' && password == '123456') {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }
}
