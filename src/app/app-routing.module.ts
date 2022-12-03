import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './Exchange-rate/exchange-rate.component';
import { NotFoundComponent } from './Not-found/not-found.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { SignInComponent } from './Account/sign-in/sign-in.component';
import { TransactionsComponent } from './Transactions/transactions.component';
import { HomeComponent } from './Home/home.component';
import { NewsComponent } from './News/news.component';
import { ContactComponent } from './Contact/contact.component';

const routes: Routes = [
    { path: "Home", component: HomeComponent },
    { path: "News", component: NewsComponent },
    { path: "Contact", component: ContactComponent },
    { path: "Transactions", component: TransactionsComponent },
    { path: "ExchangeRate", component: ExchangeRateComponent },
    { path: "SignUp", component: SignUpComponent },
    { path: "SignIn", component: SignInComponent },
    { path: "**", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }