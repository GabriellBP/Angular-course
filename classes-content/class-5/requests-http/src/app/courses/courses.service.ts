import { Injectable } from '@angular/core';
import {Course} from "./course.model";
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = `${environment.API}courses`;


  constructor(private http: HttpClient) {  }

  getCourses() {
    return this.http.get<Course[]>(this.API)
      .pipe(tap(console.log));
  }

  // getCourseById(id): Course {
  //   return this.courses.find(c => c.id == id);
  // }
}
