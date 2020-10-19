import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: boolean;
  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'];
    })
  }

  ngOnInit(): void {
  }

  doLogin() {
    this.error = !this.authService.doLogin(this.username, this.password, this.returnUrl);
  }
}
