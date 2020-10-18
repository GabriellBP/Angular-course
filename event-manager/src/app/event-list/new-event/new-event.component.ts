import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TagsService} from "../../tags/tags.service";
import {ActivatedRoute} from "@angular/router";
import {EventModel} from "../../shared/event.model";
import {EventListService} from "../event-list.service";


function tagsValidator(): ValidatorFn {
  return (formGroup: FormGroup): ValidationErrors | null => {
    let checked = false;
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      if (control.value) {
        checked = true;
      }
    });
    if (checked)
      return null;
    else
      return {'minTags': true};
  }
}

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  priorities = [
    {value: 0, text: 'Sem prioridade'},
    {value: 1, text: 'Normal'},
    {value: 2, text: 'Urgente'},
    {value: 3, text: 'Muito urgente'}
  ];

  form: FormGroup;

  constructor(private tagService: TagsService, private route: ActivatedRoute, private eventService: EventListService) {
    let curEvent = new EventModel();
    let data = this.route.snapshot.data;
    if (data['action'] == 'EDIT') {
      // carregar o evento
      let id = this.route.snapshot.params['id'];
      curEvent = this.eventService.getEventById(parseInt(id));
    }
    console.log(curEvent.eventDate.toISOString());
    this.form = new FormGroup({
      title: new FormControl(curEvent.title, Validators.required),
      detail: new FormControl(curEvent.detail, Validators.required),
      date: new FormControl(curEvent.eventDate.toISOString().split('T')[0], Validators.required),
      priority: new FormControl(curEvent.priority, Validators.required),
      tags: new FormGroup({}, tagsValidator())
    });
    tagService.getTags().forEach(t => {
      this.tags.addControl(t.name, new FormControl(false));
    });
  }

  get title() {
    return this.form.get('title');
  }

  get detail() {
    return this.form.get('detail');
  }

  get date() {
    return this.form.get('date');
  }

  get priority() {
    return this.form.get('priority');
  }

  get tags(): FormGroup {
    return <FormGroup>this.form.get('tags');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.date.value);
  }
}
