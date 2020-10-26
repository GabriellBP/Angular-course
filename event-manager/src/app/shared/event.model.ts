import {CommentModel} from './comment.model';
import {TagModel} from './tag.model';

export class EventModel {
  public id: number;
  public title: string;
  public detail: string;
  public tags: TagModel[]; // for now
  public priority: number;
  public eventDate: Date;
  public comments: CommentModel[];

  constructor() {
    this.eventDate = new Date();
    this.tags = [];
    this.comments = [];
  }

  static instance(id: number, title: string, detail: string, tags: TagModel[],
                  priority: number, eventDate: Date, comments?: CommentModel[]): EventModel {
    let event = new EventModel();
    event.id = id;
    event.title = title;
    event.detail = detail;
    event.tags = tags;
    event.priority = priority;
    event.eventDate = eventDate;
    if (comments != undefined) {
      event.comments = comments;
    }
    return event;
  }

  toApiObj() {
    return {
      event: this.title,
      detail: this.detail,
      date: this.eventDate.toISOString(),
      priority: this.priority.toString(),
      tags: this.tags.map(t => t.id),
      comments: this.comments.map(c => c.id)
    };
  }

  static fromApi(event): EventModel {
    return EventModel.instance(event.id, event.event, event.detail, event.tags.map(t => TagModel.fromApi(t)), parseInt(event.priority),
      new Date(event.date), event.comments);

  }
}
