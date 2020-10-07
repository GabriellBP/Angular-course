import { Component, OnInit } from '@angular/core';

import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: string[] = [];
  eventsService: EventsService;

  constructor() {
    this.eventsService = new EventsService();
  }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

}
