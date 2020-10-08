import { CommentModel } from './comment.model';
import { TagModel } from './tag.model';

export class EventModel {
  public title: string;
  public detail: string;
  public author: string; // for now
  public tags: TagModel[]; // for now
  public created: Date;
  public priority: number;
  public eventDate: Date;
  public comments: CommentModel[];

  constructor(title: string, detail: string, author: string, tags: TagModel[],
              created: Date, priority: number, eventDate: Date, comments: CommentModel[]) {
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
