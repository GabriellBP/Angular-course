import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Course} from '../course.model';
import {CoursesService} from '../courses.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  courseId: string;
  subscription: Subscription;
  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CoursesService) {
    this.subscription = route.params.subscribe((params) => {
      this.courseId = params['id'];
      courseService.getCourseById(this.courseId).pipe(take(1)).subscribe(data => this.course = data);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
