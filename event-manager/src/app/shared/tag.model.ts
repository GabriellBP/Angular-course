import {User} from './user.model';

const colors = ['#ef751c', '#8560ef', '#1975d0']

export class TagModel {
  public id: number;
  public name: string;
  public color: string;
  public detail: string;


  constructor(name: string, detail: string) {
    this.name = name;
    this.detail = detail;
    this.color = TagModel.getRandomColor();
  }

  private static getRandomColor() {
    return colors[Math.floor(Math.random() * 3)];
  }
}
