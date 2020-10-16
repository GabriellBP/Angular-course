export class EventModel {
  public title: string;
  public description: string;
  public status: string;
  public priority: number;

  constructor(title: string, description: string, status: string, priority: number) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
  }

}
