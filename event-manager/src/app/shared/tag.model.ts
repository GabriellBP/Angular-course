import {User} from './user.model';

const colors = ['#ef751c', '#8560ef', '#1975d0'];

export class TagModel {
  public id: number;
  public name: string;
  public color: string;
  public detail: string;


  constructor(name: string, detail: string, id?: number) {
    if (id) {
      this.id = id;
    }
    this.name = name;
    this.detail = detail;
    this.color = TagModel.getRandomColor();
  }

  private static getRandomColor(): string {
    return colors[Math.floor(Math.random() * 3)];
  }

  static fromApi(tag): TagModel {
    const tagModel = new TagModel(tag.title, tag.information);
    tagModel.id = tag.id;

    return tagModel;
  }

  toApiObj(): any {
    return {
      title: this.name,
      information: this.detail
    };
  }

}
