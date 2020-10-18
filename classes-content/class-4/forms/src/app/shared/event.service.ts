import { Injectable } from '@angular/core';

import { EventModel } from './event.model';
import {Observable, Observer} from "rxjs";

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

  isNameAvailable(title): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      setTimeout(() => {
        observer.next(this.events.findIndex(e => e.title != title) == -1)
        observer.complete();
      }, 3000);
    })
  }
}
