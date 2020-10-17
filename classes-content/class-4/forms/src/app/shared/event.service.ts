import { Injectable } from '@angular/core';

import { EventModel } from './event.model';

@Injectable()
export class EventService {

  events: EventModel[] = [];

  status = ['open', 'closed'];

  constructor() { }

  createEvent(title: string, description: string, status: string, priority: number): void {
      const eventModel = new EventModel(title, description, status, priority);

      this.events.push(eventModel);
  }

  getEvents(): void {
    console.log(this.events);
  }
}
