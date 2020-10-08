import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RootModule} from "./root/root.module";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RootModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
