import { Component, OnInit } from '@angular/core';
import {CoursesService} from "./courses.service";
import {Course} from "./course.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  navigateToCourse(course: Course) {
    this.router.navigate(['/courses', course.id]);
  }
}
