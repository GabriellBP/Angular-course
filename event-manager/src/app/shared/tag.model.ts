import {User} from './user.model';

const colors = ['#ef751c', '#8560ef', '#1975d0']

export class TagModel {
  public name: string;
  public color: string;
  public createdBy: User;


  constructor(name: string) {
    this.name = name;
    this.color = TagModel.getRandomColor();
  }

  private static getRandomColor() {
    return colors[Math.floor(Math.random() * 3)];
  }
}
