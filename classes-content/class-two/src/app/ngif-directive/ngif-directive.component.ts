import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.css']
})
export class NgifDirectiveComponent implements OnInit {

  courses = [];
  showCourses = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowHideCourse() {
    this.showCourses = !this.showCourses;
  }
}
