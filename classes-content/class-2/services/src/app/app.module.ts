import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsService } from './events/events.service';
import {EventsModule} from './events/events.module';
import { CreateEventModule } from './create-event/create-event.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventsModule,
    CreateEventModule
  ],
  // providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
