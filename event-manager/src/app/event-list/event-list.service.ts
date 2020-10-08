import { Injectable } from '@angular/core';
import { EventModel } from '../shared/event.model';
import {CommentModel} from '../shared/comment.model';

@Injectable()
export class EventListService {

  private events: EventModel[] = [];

  constructor() {
    for (let i = 0; i < 15; i++) {
      this.events.push(new EventModel(
        'Event 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui velit, interdum sed tristique sed, tempor tincidunt velit. Fusce tincidunt neque ac felis sollicitudin tincidunt id ac mauris. Aliquam nec consectetur felis. Donec dapibus malesuada ante ut facilisis. Nullam euismod lorem et quam accumsan euismod. Maecenas sed turpis sed lectus ultrices facilisis. Cras et pretium urna, eu eleifend est. Vivamus vel neque sed ligula vulputate feugiat.',
        'Gabriel',
        ['Tag 1', 'Tag 2', 'Tag 3'],
        new Date(),
        2,
        new Date(2020, 9, 22),
        [new CommentModel(
          'Lucas',
          new Date(2020, 10, 7),
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui velit, interdum sed tristique sed, tempor tincidunt velit. Fusce tincidunt neque ac felis sollicitudin tincidunt id ac mauris.'
        )]
      ));
    }
  }

  getNextEvents(): EventModel[] {
    return this.events;
  }

}
