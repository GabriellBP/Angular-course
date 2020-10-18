import {Injectable} from '@angular/core';
import {Student} from './student.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

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

  createStudent(student: Student) {
    student.id = this.currentId++;
    this.students.push(student);
  }

  updateStudent(student: Student) {
    let pos = this.students.findIndex(s => s.id == student.id);
    this.students[pos] = student;
  }
}
