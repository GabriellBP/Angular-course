import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EventListModule } from './event-list/event-list.module';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SidebarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    EventListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
