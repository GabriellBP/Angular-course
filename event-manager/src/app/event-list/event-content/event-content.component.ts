import { Component, Input, OnChanges } from '@angular/core';
import {EventModel} from '../../shared/event.model';
import {EventListService} from '../event-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnChanges {

  eventModel: EventModel;

  constructor(private eventService: EventListService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.eventModel = eventService.getEventById(parseInt(params['id']));
    });
  }

  ngOnChanges(): void {
    console.log(this.eventModel.title);
  }

}
