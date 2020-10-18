import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {NgForm} from '@angular/forms';
import {EventModel} from '../shared/event.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  stts: string[] = [];

  eventModel: EventModel;

  constructor(private eventService: EventService) {
    this.stts = eventService.status;
  }

  ngOnInit(): void {
    // console.log(this.stts);

    // this.eventModel = new EventModel('Meu Evento', 'Descrição do meu evento', this.stts[0], 5);
    this.eventModel = new EventModel();
  }

  onSubmit(f: NgForm): void {
    // console.log(f.value);
    // console.log(this.eventModel);

    this.eventService.createEvent(this.eventModel.title, this.eventModel.description, this.eventModel.status, this.eventModel.priority);
    this.eventService.getEvents();
    f.resetForm();
  }
}
