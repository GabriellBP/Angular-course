import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: string[] = ['Event 1', 'Event 2', 'Event 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
