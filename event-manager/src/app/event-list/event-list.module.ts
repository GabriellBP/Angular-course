import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListComponent } from './event-list.component';
import { EventContentComponent } from './event-content/event-content.component';
import { EventListService } from './event-list.service';
import {EventListRoutingModule} from './event-list-routing.module';



@NgModule({
  declarations: [
    EventListComponent,
    EventContentComponent
  ],
  exports: [EventListComponent],
  providers: [EventListService],
  imports: [
    CommonModule,
    EventListRoutingModule
  ]
})
export class EventListModule { }
