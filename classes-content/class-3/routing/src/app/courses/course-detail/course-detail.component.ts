import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Course} from "../course.model";
import {CoursesService} from "../courses.service";

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
      this.course = courseService.getCourseById(this.courseId);
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
