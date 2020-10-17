import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import {MainContentComponent} from '../main-content/main-content.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {EventsComponent} from './events.component';


@NgModule({
  declarations: [EventsComponent, MainContentComponent, SidebarComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [
    MainContentComponent,
    SidebarComponent
  ]
})
export class EventsModule { }
