import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { SignInComponent } from './Account/sign-in/sign-in.component';
import { JwtServiceInterceptor } from './Account/jwt-service.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExchangeRateComponent,
    NotFoundComponent,
    SignUpComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
