import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SetUserState } from 'src/app/store/user/user.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private _store: Store
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    try {
      this.authService.postSignIn(this.user)
        .subscribe({
          next: res => {
            this._store.dispatch(new SetUserState({ userName: this.user.email, roleId: 'user', token: (res as any).token }));
            sessionStorage.setItem("sessionToken", (res as any).token);
            console.log((res as any).token)
            this.router.navigate(['/inventory']);
          },
          error: error => {
            console.error(error);
          }
        });
    } catch(error) {
      console.error(error);
    }
  }

};
