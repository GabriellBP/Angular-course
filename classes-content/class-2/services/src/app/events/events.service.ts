import {EventEmitter, Injectable} from '@angular/core';
import {LogService} from '../shared/log.service';

@Injectable()
export class EventsService {

  static staticEventEmitter = new EventEmitter<string>();

  eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  events: string[] = ['Event 1', 'Event 2', 'Event 3'];

  constructor(private logService: LogService) {
    console.log('Events Service');
  }

  getEvents(): string[] {
    this.logService.consoleLog('getting the events');

    return this.events;
  }

  addEvent(value: string): void {
    this.logService.consoleLog(`adding a new event called ${value}`);

    this.events.push(value);

    this.eventEmitter.emit(value);

    EventsService.staticEventEmitter.emit(value);
  }
}
