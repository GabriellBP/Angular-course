import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { EventsService } from './events.service';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EventsComponent
  ],
  // providers: [EventsService]
})
export class EventsModule { }
