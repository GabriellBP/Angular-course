import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Student} from "../student.model";
import {StudentsService} from "../students.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  student: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentsService, private router: Router) {
    this.subscription = route.params.subscribe((params) => {
      studentService.getStudentById(params.id).subscribe(data => this.student = data);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editStudent() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParams: {action: 'EDIT'}});
  }
}
