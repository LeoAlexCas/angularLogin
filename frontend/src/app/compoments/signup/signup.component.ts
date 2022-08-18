import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    try {
      this.authService.postSignUp(this.user)
      .subscribe(
        res => { 
          console.log((res as any).token);
          sessionStorage.setItem('token', (res as any).token);
          this.router.navigate(['/inventory']);
        }
      )
    } catch(error) {
      console.error(error);
    }
  }
}
