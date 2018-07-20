import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { ArduinoHomeComponent } from './arduino-home/arduino-home.component';
import { ArduinoCatalogoComponent } from './arduino-catalogo/arduino-catalogo.component';
import { ArduinoContatoComponent } from './arduino-contato/arduino-contato.component';
import { ArduinoSobrenosComponent } from './arduino-sobrenos/arduino-sobrenos.component';
import { ArduinoLoginComponent } from './arduino-login/arduino-login.component';

const appRoutes: Routes = [
	{ path: 'home', component: ArduinoHomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'catalogo', component: ArduinoCatalogoComponent },
	{ path: 'contato', component: ArduinoContatoComponent },
	{ path: 'sobrenos', component: ArduinoSobrenosComponent },
	{ path: 'login', component: ArduinoLoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}