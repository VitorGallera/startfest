import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { StartupModule } from './startupcards/startupcards.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StartupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
