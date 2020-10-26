import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TagsService} from "../../tags/tags.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventModel} from "../../shared/event.model";
import {EventListService} from "../event-list.service";
import {TagModel} from '../../shared/tag.model';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';


function tagsValidator(): ValidatorFn {
  return (formGroup: FormGroup): ValidationErrors | null => {
    let checked = false;
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      if (control.value) {
        checked = true;
      }
    });
    if (Object.keys(formGroup.controls).length == 0)
      return null;
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
  currentEvent: EventModel;
  fillTagsFn: any;
  tagModels: TagModel[];

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
        this.currentEvent = EventModel.fromApi(ev);
        this.title.setValue(this.currentEvent.title);
        this.detail.setValue(this.currentEvent.detail);
        this.date.setValue(this.currentEvent.eventDate.toISOString().split('T')[0]);
        this.priority.setValue(this.currentEvent.priority);

        if (this.fillTagsFn != undefined) {
          this.fillTagsFn();
        } else {
          this.fillTagsFn = this.fillTags.bind(this);
        }
      });
    }

    tagService.getTags().subscribe((tags) => {
      this.tagModels = tags.map((t) => TagModel.fromApi(t));
      this.tagModels.forEach(t => {
        this.tags.addControl(t.id.toString(), new FormControl(false));
      });

      if (this.fillTagsFn != undefined) {
        this.fillTagsFn();
      } else {
        this.fillTagsFn = this.fillTags.bind(this);
      }
    });
  }

  fillTags() {
    for (const tgs of this.currentEvent.tags) {
      this.tags.controls[tgs.id.toString()].setValue(true);
    }
  }

  getTagById(id): any {
    let tag =  this.tagModels.find(t => t.id == id);
    if (tag == undefined )
      return {};
    return tag;
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
    const tags = Object.keys(this.tags.value).filter(k => this.tags.value[k]).map((key) => {
      let t = this.getTagById(key);
      return new TagModel(t.name, t.detail, t.id);
    });

    let evt = EventModel.instance(this.id, this.title.value, this.detail.value, tags, this.priority.value, new Date(this.date.value));
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
