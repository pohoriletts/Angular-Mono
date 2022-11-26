import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account-service.service';
import { ISignUpModel } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  sigUpForm: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {
    this.sigUpForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signUp(): void {
    if (this.sigUpForm.invalid) {
      alert("Invalid data!");
      return;
    }
    const user: ISignUpModel = this.sigUpForm.value;
    this.accountService.signUp(user).subscribe(() => {
      this.router.navigateByUrl('/ExchangeRate');
    },
      error => {
        if (error?.error?.ErrorMessage) alert(error.error.ErrorMessage);
        else alert(error.message);
      });
  }
  ngOnInit(): void {
  }
}