import { Component, OnInit } from '@angular/core';
import { ExchangeRateServices } from './exchange-rate.services';
import { IExchangeRate } from './IExchangeRate';
import { ARR_INTERNATIONAL_FORMAT } from './IFlagsSymbols';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  constructor(private exchangeRateServices: ExchangeRateServices) { }
  arrResult: IExchangeRate[] = [];

  getCurrentExchangeRate(): void {
    this.exchangeRateServices.getExchangeRate().subscribe(result => {
      this.arrResult = result;

      for (let i = 0; i < this.arrResult.length; i++) {
        for (let j = 0; j < ARR_INTERNATIONAL_FORMAT.length; j++) {
          if (this.arrResult[i].currencyCodeA == ARR_INTERNATIONAL_FORMAT[j].code) {
            this.arrResult[i].name = ARR_INTERNATIONAL_FORMAT[j].name;
            this.arrResult[i].symbol = ARR_INTERNATIONAL_FORMAT[j].symbol;
          }
        }
      }
    });
  }
  ngOnInit(): void {
  }

}
