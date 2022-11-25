import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: "exchange-rate", component: ExchangeRateComponent },
    { path: "**", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }