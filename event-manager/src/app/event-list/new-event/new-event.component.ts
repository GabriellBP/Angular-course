import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TagsService} from "../../tags/tags.service";


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

  constructor(private tagService: TagsService) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      detail: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      priority: new FormControl(0, Validators.required),
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
    console.log('submitting');
  }
}
