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

  doLogin(username, password, returnUrl) {
    if (username == 'asus' && password == '123456') {
      this.isLoggedIn = true;
      if (!returnUrl)
        this.router.navigate(['/home']);
      else
        this.router.navigateByUrl(returnUrl);
      return true;
    }
    return false;
  }
}
