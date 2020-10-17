import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }


  login() {
    this.authService.doLogin(this.email, this.password, this.returnUrl);
  }
}
