import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events.component';
import {EventListComponent} from '../event-list/event-list.component';
import {EventListModule} from '../event-list/event-list.module';

const routes: Routes = [
  {path: '', component: EventsComponent, children: [
      {path: 'events', loadChildren: () => EventListModule}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
