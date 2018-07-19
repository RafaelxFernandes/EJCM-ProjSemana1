import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArduinoHomeComponent } from './arduino-home/arduino-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArduinoHomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }