import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagModel} from '../../shared/tag.model';
import {NgForm} from "@angular/forms";
import {TagsService} from '../tags.service';

@Component({
  selector: 'app-create-edit-tag',
  templateUrl: './create-edit-tag.component.html',
  styleUrls: ['./create-edit-tag.component.css']
})
export class CreateEditTagComponent implements OnInit {

  @Input()
  selectedTag: TagModel;

  act = 'Editar';

  @Output()
  requestedClosing: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private tagsService: TagsService) { }

  ngOnInit(): void {
    if (!this.selectedTag) {
      this.selectedTag = new TagModel("", "");
      this.act = 'Criar';
    }
  }

  callClose() {
    this.requestedClosing.emit(true);
  }

  save() {
    if (this.act === 'Criar'){
      this.tagsService.createTag(this.selectedTag).subscribe((tag) => {
        this.callClose();
      });
    } else if (this.act === 'Editar') {
      this.tagsService.updateTag(this.selectedTag).subscribe( (tag) => {
        this.callClose();
      });
    }

  }

  clickedBox($event: MouseEvent) {
    $event.stopPropagation();
  }

  onSubmit(f: NgForm) {
    this.save();
  }
}
