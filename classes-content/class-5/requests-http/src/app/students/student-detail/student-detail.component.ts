import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Student} from '../student.model';
import {StudentsService} from '../students.service';
import {take} from 'rxjs/operators';

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
      studentService.getStudentById(params.id).pipe(take(1)).subscribe(data => this.student = data);
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

  deleteStudent() {
    this.studentService.deleteStudent(this.student.id).subscribe(
      success => {
        console.log('success');
        this.router.navigate(['/students/new'], {queryParams: {action: 'CREATE'}});
      },
      error => console.error(error)
    );
  }
}
