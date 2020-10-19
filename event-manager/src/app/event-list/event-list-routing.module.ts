import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventContentComponent} from './event-content/event-content.component';
import {EventListComponent} from './event-list.component';
import {NewEventComponent} from "./new-event/new-event.component";

const routes: Routes = [
  {path: 'new', component: NewEventComponent, data: {action: 'CREATE', name: 'Novo evento'}},
  {path: ':id/edit', component: NewEventComponent, data: {action: 'EDIT', name: 'Editar evento'}},
  {path: '', component: EventListComponent, children: [
      {path: ':id', component: EventContentComponent}
    ]},
];

@NgModule({
  declarations: [

  ],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EventListRoutingModule { }
