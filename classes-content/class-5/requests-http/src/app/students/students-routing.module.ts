import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentFormComponent} from "./student-form/student-form.component";

const routes: Routes = [
  {path: '', component: StudentsComponent, children: [
      {path: 'new', component: StudentFormComponent},
      {path: ':id/edit', component: StudentFormComponent},
      {path: ':id', component: StudentDetailComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
