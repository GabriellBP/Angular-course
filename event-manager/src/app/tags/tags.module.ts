import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { CreateEditTagComponent } from './create-edit-tag/create-edit-tag.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TagsComponent, CreateEditTagComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    FormsModule
  ]
})
export class TagsModule { }
