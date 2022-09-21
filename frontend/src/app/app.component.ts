import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { CreditsSwitchService } from './services/credits-switch/credits-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'frontend';  
  public creditModalValue = false;

  constructor(
    public authService: AuthService,
    public creditSwitch: CreditsSwitchService
  ) {}

  ngOnInit() {
    this.creditSwitch.$creditSwitch
      .subscribe({
        next: (value: boolean) => {
          this.creditModalValue = value;
        }
      })
  };

  creditsButton() {
    this.creditSwitch.$creditSwitch.emit(true);
  }
};
