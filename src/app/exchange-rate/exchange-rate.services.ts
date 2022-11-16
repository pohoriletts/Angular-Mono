import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExchangeRate } from './IExchangeRate';

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateServices {
    constructor(private http: HttpClient) {

    }
    
    getExchangeRate(): Observable<IExchangeRate[]> {
        return this.http.get<IExchangeRate[]>('https://api.monobank.ua/bank/currency');
    }
}