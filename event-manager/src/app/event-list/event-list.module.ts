import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListComponent } from './event-list.component';
import { EventContentComponent } from './event-content/event-content.component';
import { EventListService } from './event-list.service';
import {EventListRoutingModule} from './event-list-routing.module';
import { NewEventComponent } from './new-event/new-event.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EventListComponent,
    EventContentComponent,
    NewEventComponent
  ],
  exports: [EventListComponent],
  providers: [EventListService],
  imports: [
    CommonModule,
    EventListRoutingModule,
    ReactiveFormsModule
  ]
})
export class EventListModule { }
