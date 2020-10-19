import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EventListModule } from './event-list/event-list.module';
import {registerLocaleData} from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {EventsRoutingModule} from './events/events-routing.module';
import {EventsModule} from './events/events.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    FormsModule,
    HttpClientModule
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
