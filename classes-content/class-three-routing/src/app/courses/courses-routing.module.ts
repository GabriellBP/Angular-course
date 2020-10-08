import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from "./courses.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'course/:id', component: CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
