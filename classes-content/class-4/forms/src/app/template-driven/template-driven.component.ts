import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  status: string[] = [];

  constructor(private eventService: EventService) {
    this.status = eventService.status;
  }

  ngOnInit(): void {
    console.log(this.status);
  }

}
