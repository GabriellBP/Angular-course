import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';
import {FormsModule} from "@angular/forms";
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { YellowBgDirective } from './shared/yellow-bg.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifDirectiveComponent,
    NgforDirectiveComponent,
    NgclassDirectiveComponent,
    NgstyleDirectiveComponent,
    ElvisOperatorComponent,
    NgContentExampleComponent,
    YellowBgDirective,
    CustomDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
