import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifDirectiveComponent,
    NgforDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
