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
    this.getTags();
  }

  getTags() {
    this.tagService.getTags().subscribe( (tags) => {
      this.tags = tags.map(t => TagModel.fromApi(t));
    });
  }

  editTag(i: number) {
    this.selectedTag = this.tags[i];
    this.showCreateEditTag = true;
  }


  removeTag(i: number) {
    const ans = confirm('Deseja realmente excluir essa Tag?');
    if (ans) {
      this.tagService.deleteTag(this.tags[i]).subscribe(() => {
        this.tags.splice(i, 1);
      });
    }
  }

  closeModal() {
    this.getTags();
    this.selectedTag = null;
    this.showCreateEditTag = false;
  }

  createTag() {
    this.showCreateEditTag = true;
  }
}
