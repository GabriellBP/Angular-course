import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().pipe(take(1)).subscribe(user => this.currentUser = user);
  }

  logout(): void {
    this.authService.doLogout();
  }
}
