import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AjaxArryComponent } from './comps/ajax-arry/ajax-arry.component';

@NgModule({
  declarations: [
    AppComponent,
    AjaxArryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
