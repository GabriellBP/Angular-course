import { Injectable } from '@angular/core';
import {Student} from "../students/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [];
  currentId = 5;


  constructor() {
    this.students = StudentsService.buildDefaultStudents();
  }

  getStudents() {
    return this.students;
  }

  getStudentById(id): Student {
    return this.students.find(s => s.id == id);
  }

  private static buildDefaultStudents() {
    let students = [];
    students.push(new Student(1,'Lucas', '4884984598'));
    students.push(new Student(2,'Gabriel', '9348329048'));
    students.push(new Student(3,'Gleysson', '39439458'));
    students.push(new Student(4,'Vigia', '3457686566'));
    return students;
  }

  createStudent(student: Student) {
    student.id = this.currentId++;
    this.students.push(student);
  }

  updateStudent(student: Student) {

  }
}
