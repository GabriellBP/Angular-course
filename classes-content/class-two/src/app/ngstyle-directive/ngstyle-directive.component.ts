import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.css']
})
export class NgstyleDirectiveComponent implements OnInit {

  password: any;
  isPasswordCorrect = false;

  constructor() { }

  ngOnInit(): void {
  }

  onTextChange() {
    this.isPasswordCorrect = this.password == 'asus';
  }

}
