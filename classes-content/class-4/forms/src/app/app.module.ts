import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { EventService } from './shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
