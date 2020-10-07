import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventsService {

  events: string[] = ['Event 1', 'Event 2', 'Event 3'];

  eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('Events Service');
  }

  getEvents(): string[] {
    return this.events;
  }

  addEvent(value: string): void {
    this.events.push(value);

    this.eventEmitter.emit(value);
  }
}
