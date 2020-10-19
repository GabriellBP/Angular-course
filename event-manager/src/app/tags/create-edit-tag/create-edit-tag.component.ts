import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagModel} from '../../shared/tag.model';
import {NgForm} from "@angular/forms";

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

  constructor() { }

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
    this.callClose();
  }

  clickedBox($event: MouseEvent) {
    $event.stopPropagation();
  }

  onSubmit(f: NgForm) {
    this.save();
  }
}
