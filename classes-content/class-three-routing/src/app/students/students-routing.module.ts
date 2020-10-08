import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentFormComponent} from "./student-form/student-form.component";

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'students/:id/edit', component: StudentFormComponent},
  {path: 'students/:id/new', component: StudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
