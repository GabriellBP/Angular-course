import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
  description: string;
  courses: string[];

  constructor() {
    this.description = 'List of courses from Asus';
    this.courses = ['Angular', 'Django'];
  }

}
