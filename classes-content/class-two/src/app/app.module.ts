import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NgifDirectiveComponent,
    NgforDirectiveComponent,
    NgclassDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
