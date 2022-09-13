import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SetUserState } from 'src/app/store/user/user.actions';
import { Store } from '@ngxs/store';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };

  realPass: boolean = false;
  usedPass = new Observable<boolean>((observer: Observer<boolean>) => {
    // setInterval(() => {
    //   let trueOrFalse = () => {
    //     let randomNumber = Math.floor(Math.random() * 10);
    //     if(randomNumber % 2 === 0) {
    //       console.log(randomNumber)
    //       return true
    //     } else {
    //       console.log(randomNumber)
    //       return false
    //     }
    //   };
    //   observer.next(trueOrFalse())
    // },1000);
    let ads = this.realPass;
    observer.next(ads);
  });

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
            console.log("Navegar a inventory");
            this.router.navigate(['/inventory']);
          },
          error: error => {
            console.log('el erorrrrrrrrrrrrrr')
            console.log(error.error.message);
            if(error.error.message === "Pass incorrecta") {
              this.realPass = true;
              console.log('el realpass')
              console.log(this.realPass)
            }
          }
        });
    } catch(error) {
      console.error(error);
    }
  }

};
