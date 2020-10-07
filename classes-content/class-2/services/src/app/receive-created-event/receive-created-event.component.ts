import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events/events.service';

@Component({
  selector: 'app-receive-created-event',
  templateUrl: './receive-created-event.component.html',
  styleUrls: ['./receive-created-event.component.css']
})
export class ReceiveCreatedEventComponent implements OnInit {

  lastEvent: string;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.eventEmitter.subscribe(
      createdEvent => this.lastEvent = createdEvent
    );
  }

}
