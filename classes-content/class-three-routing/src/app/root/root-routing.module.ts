import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {CoursesModule} from "../courses/courses.module";
import {RootComponent} from "./root.component";
import {StudentsModule} from "../students/students.module";

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      {path: 'courses', loadChildren: () => CoursesModule},
      {path: 'students', loadChildren: () => StudentsModule},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule {
}
