import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArduinoHomeComponent } from './arduino-home/arduino-home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
	{ path: 'home', component: ArduinoHomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}