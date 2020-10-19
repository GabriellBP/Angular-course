import { CommentModel } from './comment.model';
import { TagModel } from './tag.model';

export class EventModel {
  public id: number;
  public title: string;
  public detail: string;
  public author: string; // for now
  public tags: TagModel[]; // for now
  public created: Date;
  public priority: number;
  public eventDate: Date;
  public comments: CommentModel[];

  constructor() {
    this.eventDate = new Date();
    this.tags = [];
    this.comments = [];
  }

  static instance(id: number, title: string, detail: string, author: string, tags: TagModel[],
           created: Date, priority: number, eventDate: Date, comments: CommentModel[]): EventModel {
    let event = new EventModel();
    event.id = id;
    event.title = title;
    event.detail = detail;
    event.author = author;
    event.tags = tags;
    event.created = created;
    event.priority = priority;
    event.eventDate = eventDate;
    event.comments = comments;
    return event;
  }
}
