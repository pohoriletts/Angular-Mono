import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExchangeRate } from '../exchange-rate/Interfaces/IExchangeRate';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    constructor(private http: HttpClient) { }

}