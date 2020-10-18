import { Injectable } from '@angular/core';
import {TagModel} from '../shared/tag.model';
import {User} from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  tags: TagModel[] = [];

  constructor() {
    let user = new User();
    user.id = 1;
    user.name = "Lucas Amorim";
    for (let i = 0; i < 3; i++) {
      let tag = new TagModel('Tag ' + (i+1));
      tag.createdBy = user;
      this.tags.push(tag);
    }
  }

  getTags(): TagModel[] {
    return this.tags;
  }


}
