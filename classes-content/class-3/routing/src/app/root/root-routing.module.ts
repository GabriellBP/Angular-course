import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {CoursesModule} from "../courses/courses.module";
import {RootComponent} from "./root.component";
import {StudentsModule} from "../students/students.module";
import {AuthGuard} from "../shared/auth/auth.guard";

const routes: Routes = [
  {
    path: '', component: RootComponent, canActivate: [AuthGuard], children: [
      {path: 'courses', loadChildren: () => CoursesModule},
      {path: 'students', loadChildren: () => StudentsModule},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RootRoutingModule {
}
