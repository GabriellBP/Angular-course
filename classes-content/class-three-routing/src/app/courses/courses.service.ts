import { Injectable } from '@angular/core';
import {Course} from "./course.model";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[];


  constructor() {
    this.courses = CoursesService.buildDefaultCourses();
  }

  getCourses() {
    return this.courses;
  }

  getCourseById(id): Course {
    return this.courses.find(c => c.id == id);
  }

  private static buildDefaultCourses() {
    let courses = [];
    courses.push(new Course(1,'Angular'));
    courses.push(new Course(2,'Django'));
    courses.push(new Course(3,'React'));
    return courses;
  }
}
