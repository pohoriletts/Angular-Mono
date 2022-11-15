import { Component, OnInit } from '@angular/core';
import { ExchangeRateServices } from './exchange-rate.services';
import { IExchangeRate } from './exchangeRate';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  constructor(private exchangeRate: ExchangeRateServices) { }
  gotResul: IExchangeRate[] = [];

  getCurrentExchangeRate(): void {
    this.exchangeRate.getExchangeRate().subscribe(result => {
      this.gotResul = result;
    });
  }

  ngOnInit(): void {
  }

}
