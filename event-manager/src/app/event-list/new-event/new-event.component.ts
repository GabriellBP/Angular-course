import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TagsService} from "../../tags/tags.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  id = null;
  action = 'CREATE';

  constructor(private tagService: TagsService, private route: ActivatedRoute, private router: Router, private eventService: EventListService) {
    let data = this.route.snapshot.data;

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      detail: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      tags: new FormGroup({}, tagsValidator())
    });

    if (data['action'] == 'EDIT') {
      this.action = data['action'];
      // carregar o evento
      this.id = this.route.snapshot.params['id'];

      this.eventService.getEventById(parseInt(this.id)).subscribe((ev) => {
        let event = EventModel.fromApi(ev);
        this.title.setValue(event.title);
        this.detail.setValue(event.detail);
        this.date.setValue(event.eventDate.toISOString().split('T')[0]);
        this.priority.setValue(event.priority);
      });
    }


    // tagService.getTags().forEach(t => {
    //   this.tags.addControl(t.name, new FormControl(false));
    // });
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

  goBack() {
    this.router.navigate(['/events']);
  }

  onSubmit() {
    let evt = EventModel.instance(this.id, this.title.value, this.detail.value, [], this.priority.value, new Date(this.date.value));
    if (this.action == 'CREATE') {
      this.eventService.createEvent(evt).subscribe((event) => {
        this.goBack();
      });
    } else {
      this.eventService.updateEvent(evt).subscribe(event => {
        this.goBack();
      });
    }
  }
}
