import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../student.model';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from '../students.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  action: string;
  student: Student;

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentsService) {

    this.student = new Student(null, '', '');

    // memory leak
    route.queryParams.subscribe((params) => {
      this.action = params['action'];
    });

    route.params.subscribe((params) => {
      if (params['id']) {
        this.studentService.getStudentById(params['id']).pipe(take(1)).subscribe(data => this.student = data);
      }
    });
  }

  ngOnInit(): void {

  }


  save() {
    if (this.action == 'CREATE') {
      this.studentService.createStudent(this.student).subscribe(
        studentData => {
          console.log('success!');
          this.router.navigate(['/students', studentData.id]);
        },
        error => console.error(error),
        () => console.log('request complete')
      );
    } else {
      this.studentService.updateStudent(this.student).subscribe(
        studentData => {
          console.log('updated!');
          this.router.navigate(['/students', studentData.id]);
        },
        error => console.error(error)
      );
    }
  }
}
