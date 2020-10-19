import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {FormsModule} from '@angular/forms';
import { HumanReadableActionPipe } from './human-readable-action.pipe';
import {HttpClientModule} from '@angular/common/http';
import {StudentsService} from './students.service';


@NgModule({
  declarations: [StudentsComponent, StudentDetailComponent, StudentFormComponent, HumanReadableActionPipe],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule,
    HttpClientModule
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
