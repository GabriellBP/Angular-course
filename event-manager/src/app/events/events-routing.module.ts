import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events.component';
import {EventListComponent} from '../event-list/event-list.component';
import {EventListModule} from '../event-list/event-list.module';
import {AuthGuard} from '../auth/auth.guard';
import {TagsModule} from '../tags/tags.module';

const routes: Routes = [
  {path: '', component: EventsComponent, canActivate: [AuthGuard], children: [
      {path: 'events', loadChildren: () => EventListModule},
      {path: 'tags', loadChildren: () => TagsModule},
      {path: '', redirectTo: 'events', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
