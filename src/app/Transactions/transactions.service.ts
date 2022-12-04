import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>('http://mono.somee.com/all');
  }
  getById(id: number): Observable<ITransaction> {
    return this.http.get<ITransaction>('http://mono.somee.com/get/' + id);
  }
  // edit(transaction: ITransaction): any {
  //   this.http.put('http://mono.somee.com/Edit')
  // }
  delete(id: number): any {
    this.http.delete('http://mono.somee.com/Delete/' + id);
  }
}
