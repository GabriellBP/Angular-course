import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventContentComponent} from './event-content/event-content.component';
import {EventListComponent} from './event-list.component';

const routes: Routes = [
  {path: '', component: EventListComponent, children: [
      {path: ':id', component: EventContentComponent}
    ]}
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
