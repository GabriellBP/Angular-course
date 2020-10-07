import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsService } from '../events/events.service';
import { CreateEventComponent } from './create-event.component';
import { ReceiveCreatedEventComponent } from '../receive-created-event/receive-created-event.component';


@NgModule({
  declarations: [
    CreateEventComponent,
    ReceiveCreatedEventComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateEventComponent
  ],
  // providers: [EventsService]
})
export class CreateEventModule { }
