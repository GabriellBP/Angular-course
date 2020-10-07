import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [EventsService]
})
export class CreateEventComponent implements OnInit {

  events: string[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  onCreateEvent(value: string): void {
    this.eventsService.addEvent(value);
  }
}
