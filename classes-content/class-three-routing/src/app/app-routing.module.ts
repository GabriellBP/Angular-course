import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
