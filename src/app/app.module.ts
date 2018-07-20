import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArduinoHomeComponent } from './arduino-home/arduino-home.component';

import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { ArduinoCatalogoComponent } from './arduino-catalogo/arduino-catalogo.component';
import { ArduinoContatoComponent } from './arduino-contato/arduino-contato.component';
import { ArduinoSobrenosComponent } from './arduino-sobrenos/arduino-sobrenos.component';
import { ArduinoLoginComponent } from './arduino-login/arduino-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArduinoHomeComponent,
    FooterComponent,
    ArduinoCatalogoComponent,
    ArduinoContatoComponent,
    ArduinoSobrenosComponent,
    ArduinoLoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }