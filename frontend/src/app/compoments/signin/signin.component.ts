import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  signIn() {
    try {
      this.authService.postSignIn(this.user)
        .subscribe(
          res => {
            sessionStorage.setItem('token', (res as any).token);
            this.router.navigate(['/inventory']);
          }
        );
    }catch (error) {
      console.error(error);
    }

  }

}
