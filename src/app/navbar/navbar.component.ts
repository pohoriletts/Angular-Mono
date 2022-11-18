import { Component, OnInit } from '@angular/core';
import { IExchangeRate } from '../exchange-rate/Interfaces/IExchangeRate';
import { NavbarService } from './navbar.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
