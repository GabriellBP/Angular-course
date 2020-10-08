export class CommentModel {
  public author: string; // for now
  public created: Date;
  public commentary: string;

  constructor(author: string, created: Date, commentary: string) {
    this.author = author;
    this.created = created;
    this.commentary = commentary;
  }
}
