import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SetUserState } from 'src/app/store/user/user.actions';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {
  user: User = {
    email: '',
    password: ''
  };

  realPass$ = new BehaviorSubject(false);
  realUsr$ = new BehaviorSubject(false);

  constructor(
    private authService: AuthService,
    private router: Router,
    private _store: Store
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.realPass$.unsubscribe();
    this.realUsr$.unsubscribe();
  }

  signIn() {
    try {
      this.authService.postSignIn(this.user)
        .subscribe({
          next: res => {
            this._store.dispatch(new SetUserState({ userName: this.user.email, roleId: 'user', token: (res as any).token }));
            sessionStorage.setItem("sessionToken", (res as any).token);
            console.log((res as any).token)
            console.log("Navegar a inventory");
            this.router.navigate(['/inventory']);
          },
          error: error => {
            this.setMessages(error.error.message);
          }
        });
    } catch(error) {
      console.error(error);
    }
  }

  deletePassErr() {
    this.realPass$.next(false);
  }

  deleteUsrErr() {
    this.realUsr$.next(false);
  }

  setMessages(message: string) {
    switch(message) {
      case "Pass incorrecta":
        this.realPass$.next(true);
        break;
      case 'Usuario no existe':
        this.realUsr$.next(true);
        break;
      default:
        alert('Error: Cannot login');
    }
  }

};
