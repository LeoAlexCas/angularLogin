import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { defaultStateModel } from 'src/app/store/user/user.model';
import { Router } from '@angular/router';
import { UserStateSelectors } from 'src/app/store/user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpUrl = 'http://localhost:3000/signup';
  private signInUrl = 'http://localhost:3000/signin';

  constructor(
    private http: HttpClient,
    private _store: Store,
    private router: Router
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
  };

  logOut() {
    this._store.reset(defaultStateModel);
    this.router.navigate(['/signin']);
  };

  isLoggedIn() {
    if(this._store.selectSnapshot(UserStateSelectors.SelectUserState).token) {
      console.log('Si hay token')
      console.log(this._store.selectSnapshot(UserStateSelectors.SelectUserState).token);
      return true;
    }
    console.log('no hay token');
    return false;
  }
};
