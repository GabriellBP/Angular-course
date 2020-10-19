import { Component, OnInit } from '@angular/core';
import {Student} from "../student.model";
import {ActivatedRoute} from "@angular/router";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  action: string;
  student: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentsService) {

    this.student = new Student(null, "", "");

    // memory leak
    route.queryParams.subscribe((params) => {
      this.action = params['action'];
    })

    route.params.subscribe((params) => {
      if (params['id']) {
        this.student = this.studentService.getStudentById(params['id']);
      }
    })
  }

  ngOnInit(): void {

  }


  save() {
    if (this.action == 'CREATE')
      this.studentService.createStudent(this.student);
    else
      this.studentService.updateStudent(this.student);
  }
}
