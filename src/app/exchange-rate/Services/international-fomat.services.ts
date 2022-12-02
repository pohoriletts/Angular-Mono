import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternationalFormat } from '../Interfaces/IInternationalFormat';

@Injectable({
    providedIn: 'root'
})
export class InternationalFormatServices {
    constructor(private http: HttpClient) {}

    getISOcodes(): Observable<InternationalFormat[]> {
        return this.http.get<InternationalFormat[]>('http://isocodes.somee.com/all');
    }
}