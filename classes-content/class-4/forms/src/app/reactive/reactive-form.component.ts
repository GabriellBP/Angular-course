import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {EventModel} from '../shared/event.model';
import {NameAvailableValidator} from "../shared/name-available.validator";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  eventModel: EventModel;

  form: FormGroup;

  stts: string[] = [];

  constructor(private eventService: EventService, private nameAvailableValidator: NameAvailableValidator) {
    this.stts = eventService.status;
  }

  ngOnInit(): void {
    this.eventModel = new EventModel();
    this.form = new FormGroup({
      title: new FormControl(this.eventModel.title, Validators.required, this.nameAvailableValidator.validate.bind(this)),
      description: new FormControl(this.eventModel.description, Validators.required),
      priority: new FormControl(this.eventModel.priority, [Validators.required, Validators.min(0), Validators.max(5)]),
      status: new FormControl(this.eventModel.status, Validators.required)
    });
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get priority() {
    return this.form.get('priority');
  }

  get status() {
    return this.form.get('status');
  }

  onSubmit(): void {
    // console.log(f.value);
    // console.log(this.eventModel);

    this.eventService.createEvent(this.eventModel.title, this.eventModel.description, this.eventModel.status, this.eventModel.priority);
    this.eventService.getEvents();
    this.form.reset();
  }
}
