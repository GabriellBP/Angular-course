import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {

  constructor() {
    console.log('Events Service');
  }

  getEvents(): string[] {
    return ['Event 1', 'Event 2', 'Event 3'];
  }
}
