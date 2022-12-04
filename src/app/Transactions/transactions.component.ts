import { Component, OnInit } from '@angular/core';
import { ITransaction } from './transaction';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: ITransaction[] = [];
  constructor(private transactionsServices: TransactionsService) {
  }

  ngOnInit(): void {
    this.transactionsServices.getAll().subscribe(result => {
      this.transactions = result;
    });
  }
}
