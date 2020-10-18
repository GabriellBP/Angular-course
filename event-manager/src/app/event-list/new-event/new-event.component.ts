import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TagsService} from "../../tags/tags.service";

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

  constructor(private tagService: TagsService) {
    this.form = new FormGroup({
      title: new FormControl(''),
      detail: new FormControl(''),
      date: new FormControl(''),
      priority: new FormControl(0),
      tags: new FormGroup({})
    });
    const tagsGroup = <FormGroup>this.form.get('tags');
    tagService.getTags().forEach(t => {
      tagsGroup.addControl(t.name, new FormControl(false));
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

  ngOnInit(): void {
  }

}
