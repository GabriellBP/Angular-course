import { Component, OnInit } from '@angular/core';
import {EventModel} from '../shared/event.model';
import {EventListService} from './event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  nextEvents: EventModel[];

  constructor(private eventListService: EventListService) { }

  ngOnInit(): void {
    this.nextEvents = this.eventListService.getNextEvents();
  }

}
