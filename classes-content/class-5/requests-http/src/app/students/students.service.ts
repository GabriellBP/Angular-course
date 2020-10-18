import {Injectable} from '@angular/core';
import {Student} from './student.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, take} from 'rxjs/operators';

@Injectable()
export class StudentsService {

  private readonly API = `${environment.API}students`;

  students: Student[] = [];
  currentId = 5;


  constructor(private http: HttpClient) {
  }


  getStudents() {
    return this.http.get<Student[]>(this.API).pipe(
      catchError(data => console.log)
    );
  }

  getStudentById(id): Observable<Student> {
    return this.http.get<Student>(`${this.API}/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.API, student).pipe(take(1));
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.API}/${student.id}`, student).pipe(take(1));
  }
}
