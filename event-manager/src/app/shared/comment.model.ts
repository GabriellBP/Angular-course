export class CommentModel {
  public id: number;
  public author: string; // for now
  public created: Date;
  public commentary: string;

  constructor(author: string, created: Date, commentary: string) {
    this.author = author;
    this.created = created;
    this.commentary = commentary;
  }

  static fromApi(comment): CommentModel {
    const commentModel = new CommentModel(comment.author, comment.date, comment.text);
    commentModel.id = comment.id;

    return commentModel;
  }

  toApiObj(email: string, event: number): any {
    return {
      author: this.author,
      date: this.created,
      text: this.commentary,
      email,
      event
    };
  }
}
