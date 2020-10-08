import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.error = !this.authService.doLogin(this.username, this.password);
  }
}
