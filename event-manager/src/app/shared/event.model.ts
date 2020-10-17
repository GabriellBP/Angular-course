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

  constructor(id: number, title: string, detail: string, author: string, tags: TagModel[],
              created: Date, priority: number, eventDate: Date, comments: CommentModel[]) {
    this.id = id;
    this.title = title;
    this.detail = detail;
    this.author = author;
    this.tags = tags;
    this.created = created;
    this.priority = priority;
    this.eventDate = eventDate;
    this.comments = comments;
  }
}
