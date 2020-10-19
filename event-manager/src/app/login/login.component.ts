import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  loginError = "";

  returnUrl: string;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }


  login() {
    this.loginError = '';
    this.authService.doLogin(this.email, this.password).subscribe(data => {
      this.authService.saveToken(data['access']);
      this.router.navigate(['/events']);
    },error => {
      if (error.status == 401) {
        this.loginError = "Usuário ou senha inválidos";
        return;
      }
      this.loginError = 'Erro ao logar. Favor tentar novamente.';
    });
  }
}
