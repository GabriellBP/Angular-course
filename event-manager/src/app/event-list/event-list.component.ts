import { Component, OnInit } from '@angular/core';
import {EventModel} from '../shared/event.model';
import {EventListService} from './event-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  nextEvents: EventModel[] = [];

  chosenEvent: any;

  constructor(private eventListService: EventListService, private router: Router) { }

  ngOnInit(): void {
    this.eventListService.getNextEvents().subscribe((events) => {
      this.nextEvents = events.map(e => EventModel.fromApi(e));
    });
  }

  choseEvent(idx: number, eventModel: EventModel): void {
    this.router.navigate(['/events', this.nextEvents[idx].id]);
  }

  newEvent() {
    this.router.navigate(['events', 'new']);
  }
}
