import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-directive',
  templateUrl: './ngclass-directive.component.html',
  styleUrls: ['./ngclass-directive.component.css']
})
export class NgclassDirectiveComponent implements OnInit {
  password: any;
  isPasswordCorrect = false;

  constructor() { }

  ngOnInit(): void {
  }

  onTextChange() {
    this.isPasswordCorrect = this.password == 'asus';
  }
}
