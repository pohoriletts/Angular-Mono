import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './Navbar/navbar.component';
import { ExchangeRateComponent } from './Exchange-rate/exchange-rate.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Not-found/not-found.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { SignInComponent } from './Account/sign-in/sign-in.component';
import { JwtServiceInterceptor } from './Account/jwt-service.interceptor';
import { TransactionsComponent } from './Transactions/transactions.component';
import { HomeComponent } from './Home/home.component';
import { NewsComponent } from './News/news.component';
import { ContactComponent } from './Contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExchangeRateComponent,
    NotFoundComponent,
    SignUpComponent,
    SignUpComponent,
    SignInComponent,
    TransactionsComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtServiceInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
