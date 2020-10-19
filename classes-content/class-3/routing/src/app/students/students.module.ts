import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {FormsModule} from "@angular/forms";
import { HumanReadableActionPipe } from './human-readable-action.pipe';


@NgModule({
  declarations: [StudentsComponent, StudentDetailComponent, StudentFormComponent, HumanReadableActionPipe],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
