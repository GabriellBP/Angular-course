import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  stts: string[] = [];

  constructor(private eventService: EventService) {
    this.stts = eventService.status;
  }

  ngOnInit(): void {
    console.log(this.stts);
  }

  onSubmit(f: NgForm): void {
    console.log(f);
  }
}
