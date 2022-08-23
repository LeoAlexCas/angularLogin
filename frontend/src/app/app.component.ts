import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'frontend';
  public logged = false;    

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    
    if(this.authService.isLoggedIn()) {
      console.log('En app.component hay token')
      this.logged = true
    }
  };
};
