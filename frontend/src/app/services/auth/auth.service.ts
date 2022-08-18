import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpUrl = 'http://localhost:3000/signup';
  private signInUrl = 'http://localhost:3000/signin';

  constructor(
    private http: HttpClient
  ) { }

  postSignUp(user: any) {
    const newUser = {
      userName: user.email,
      pass: user.password,
      roleId: 'Usuario',
      userNumber: Math.random().toString()
    }
    console.log(newUser);
    return this.http.post(this.signUpUrl, newUser);
  }

  postSignIn(user: any) {
    const logUser = {
      userName: user.email,
      pass: user.password
    };
    return this.http.post(this.signInUrl, logUser);
  }
}
