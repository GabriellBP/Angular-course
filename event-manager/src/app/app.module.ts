import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EventListModule } from './event-list/event-list.module';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

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
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
