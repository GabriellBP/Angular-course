import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { EventContentComponent } from './event-content/event-content.component';



@NgModule({
  declarations: [
    EventListComponent,
    EventContentComponent
  ],
  exports: [EventListComponent],
  imports: [
    CommonModule
  ]
})
export class EventListModule { }
