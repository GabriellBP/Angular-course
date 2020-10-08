import { Component, Input, OnChanges } from '@angular/core';
import {EventModel} from '../../shared/event.model';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css']
})
export class EventContentComponent implements OnChanges {

  @Input() eventModel: EventModel;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.eventModel.title);
  }

}
