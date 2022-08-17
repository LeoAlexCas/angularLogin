import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/signup'

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
    return this.http.post(this.url, newUser);
  }
}
