import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account-service.service';
import { ISignUpModel } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {
    this.signInForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signIn(): void {
    if (this.signInForm.invalid) {
      alert("Invalid data!");
      return;
    }
    const user: ISignUpModel = this.signInForm.value;
    this.accountService.signIn(user).subscribe(result => {
      this.accountService.saveToken(result.token);
      this.router.navigateByUrl('/ExchangeRate');
    }, error => {
      console.error(error);
      if (error?.error?.ErrorMessage) alert(error.error.ErrorMessage);
      else alert(error.message);
    });
  }
  ngOnInit(): void {
  }
}