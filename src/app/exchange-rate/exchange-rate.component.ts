import { Component, OnInit } from '@angular/core';
import { IExchangeRate } from './Interfaces/IExchangeRate';
import { InternationalFormat } from './Interfaces/IInternationalFormat';
import { ExchangeRateServices } from './Services/exchange-rate.services';
import { InternationalFormatServices } from './Services/international-fomat.services';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  constructor(private exchangeRateServices: ExchangeRateServices, private internationalFormatServices: InternationalFormatServices) { }
  arrResult: IExchangeRate[] = [];
  arrInternationalFormat: InternationalFormat[] = [];

  num: number = 0;
  getCurrentData(): void {
    this.exchangeRateServices.getExchangeRate().subscribe(result => {
      this.arrResult = result;
    });

    this.internationalFormatServices.getInternationalFormat().subscribe(result => {
      this.arrInternationalFormat = result;

      for (let index = 0; index < this.arrResult.length; index++) {
        for (; this.num < this.arrInternationalFormat.length; this.num++) {
          if (this.arrResult[index].currencyCodeA == this.arrInternationalFormat[this.num].isOcode) {
            this.arrResult[index].flag = this.arrInternationalFormat[this.num].flag;
            this.arrResult[index].shortName = this.arrInternationalFormat[this.num].shortName;
            continue;
          }
        }
        this.num = 0;
      }
    });
  }
  ngOnInit(): void {
  }
}
