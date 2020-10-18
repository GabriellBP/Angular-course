import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from "./student.model";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentsService} from "./students.service";
import {Subscription} from "rxjs";
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: Student[];
  error = false;

  constructor(private studentService: StudentsService, private router: Router, private route: ActivatedRoute) {
    this.studentService.getStudents()
      .pipe(take(1))
      .subscribe(
        data => this.students = data,
        error => this.error = true
      );
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
