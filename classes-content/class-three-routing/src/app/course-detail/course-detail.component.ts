import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseId: string;

  constructor(private route: ActivatedRoute) {
    // this.courseId = route.snapshot.params['id'];
    route.params.subscribe((params) => {
      this.courseId = params['id'];
    })
  }

  ngOnInit(): void {
  }

}
