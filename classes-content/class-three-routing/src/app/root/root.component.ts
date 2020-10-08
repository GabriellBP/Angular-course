import { Component, OnInit } from '@angular/core';
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'root-comp',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.doLogout();
  }
}
