import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternationalFormat } from '../Interfaces/IInternationalFormat';

@Injectable({
    providedIn: 'root'
})
export class InternationalFormatServices {
    constructor(private http: HttpClient) {}

    getInternationalFormat(): Observable<InternationalFormat[]> {
        console.log(this.http.get<InternationalFormat[]>('http://getcurrency.somee.com/all'));
        return this.http.get<InternationalFormat[]>('http://getcurrency.somee.com/all');
    }
}