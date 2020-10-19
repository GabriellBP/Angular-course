import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from "./courses.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CoursesService} from "./courses.service";
import {CoursesRoutingModule} from "./courses-routing.module";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [CoursesComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
