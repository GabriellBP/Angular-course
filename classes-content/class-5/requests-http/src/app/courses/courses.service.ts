import { Injectable } from '@angular/core';
import {Course} from "./course.model";
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class CoursesService {

  private readonly API = `${environment.API}courses`;


  constructor(private http: HttpClient) {  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.API)
      .pipe(tap(console.log));
  }

  getCourseById(id): Observable<Course> {
    return this.http.get<Course>(`${this.API}/${id}`)
      .pipe(tap(console.log));
  }
}
