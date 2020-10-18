import { Component, OnInit } from '@angular/core';
import {TagModel} from '../shared/tag.model';
import {TagsService} from './tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: TagModel[];
  showCreateEditTag: boolean;
  selectedTag: TagModel;

  constructor(private tagService: TagsService) { }

  ngOnInit(): void {
    this.tags = this.tagService.getTags();
  }

  editTag(i: number) {
    this.selectedTag = this.tags[i];
    this.showCreateEditTag = true;
    console.log('edit tag', i);
  }


  removeTag(i: number) {
    this.tags.splice(i, 1);
  }

  closeModal() {
    this.showCreateEditTag = false;
  }
}
