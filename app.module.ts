import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const ROUTES: Routes = [

{ path : 'Services', component : ServicesComponent},
{ path : 'Menu', component : MenuComponent},
{ path : 'Home', component : HomeComponent},
{ path : 'About us', component : AboutusComponent},
{ path : 'Sign In', component : SignInComponent},
{ path : 'Sign Up', component : SignUpComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    BookingComponent,
    MenuComponent,
    HomeComponent,
    AboutusComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

