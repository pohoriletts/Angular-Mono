import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './Exchange-rate/exchange-rate.component';
import { NotFoundComponent } from './Not-found/not-found.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { SignInComponent } from './Account/sign-in/sign-in.component';
import { TransactionsComponent } from './Transactions/transactions.component';

const routes: Routes = [
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