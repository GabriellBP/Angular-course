import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventsService {

  static staticEventEmitter = new EventEmitter<string>();

  eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  events: string[] = ['Event 1', 'Event 2', 'Event 3'];

  constructor() {
    console.log('Events Service');
  }

  getEvents(): string[] {
    return this.events;
  }

  addEvent(value: string): void {
    this.events.push(value);

    this.eventEmitter.emit(value);

    EventsService.staticEventEmitter.emit(value);
  }
}
