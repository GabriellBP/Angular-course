import { Component, OnInit } from '@angular/core';
import {Student} from "./student.model";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentsService} from "./students.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentsService, private router: Router, private route: ActivatedRoute) {
    this.students = this.studentService.getStudents();
  }

  ngOnInit(): void {
  }

  openStudentDetails(student: Student) {
    this.router.navigate(['./', student.id], {relativeTo: this.route});
    //ou
    //this.router.navigate(['/students', student.id]);
  }

  createNew() {
    this.router.navigate(['/students/new'], {queryParams: {action: 'CREATE'}});
  }
}
