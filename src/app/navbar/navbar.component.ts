import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Account/account-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public accountService: AccountService) { }
  signOut(): void {
    this.accountService.signOut();
  }
  ngOnInit(): void {
  }
}
