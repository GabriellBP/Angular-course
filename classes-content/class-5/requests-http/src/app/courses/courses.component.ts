import { Component, OnInit } from '@angular/core';
import {CoursesService} from "./courses.service";
import {Course} from "./course.model";
import {Router} from "@angular/router";
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  error = false;

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getCourses()
      .pipe(take(1)) // unsubscribe after one try
      .subscribe(
        data => this.courses = data,
        error => {
          this.error = true;
        }
      );
  }

  navigateToCourse(course: Course) {
    this.router.navigate(['/courses', course.id]);
  }
}
