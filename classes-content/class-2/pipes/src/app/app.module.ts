import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { CamelCasePipe } from './camel-case.pipe';
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {SettingsService} from "./settings.service";
import { FilterArrayPipe } from './filter-array.pipe';
import {FormsModule} from "@angular/forms";

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    CamelCasePipe,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
