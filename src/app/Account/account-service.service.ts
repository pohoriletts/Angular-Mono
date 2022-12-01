import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ISigInResponse, ISignInModel, ISignUpModel } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) { }
  userKey = 'user-token'

  signIn(user: ISignInModel): Observable<ISigInResponse> {
    return this.http.post<ISigInResponse>('http://mono.somee.com/SignIn', { email: user.email, password: user.password });
  };
  signUp(user: ISignUpModel): Observable<any> {
    return this.http.post('http://mono.somee.com/SignUp', { email: user.email, password: user.password });
  };
  signOut(): void {
    this.http.post('http://mono.somee.com/SignOut', null).subscribe(() => {
      this.router.navigateByUrl('/Home');
      this.removeToken();
    })
  };
  saveToken(token: string): void {
    localStorage.setItem(this.userKey, token);
  };
  getToken(): string | null {
    return localStorage.getItem(this.userKey);
  };
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) != null;
  };
  removeToken(): void {
    localStorage.removeItem(this.userKey);
  };
  getCurrentUserEmail(): string | null {
    return localStorage.getItem(this.userKey);
  };
}
