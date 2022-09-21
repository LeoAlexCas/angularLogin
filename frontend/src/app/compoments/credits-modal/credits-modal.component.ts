import { Component, OnInit } from '@angular/core';
import { CreditsSwitchService } from 'src/app/services/credits-switch/credits-switch.service';

@Component({
  selector: 'app-credits-modal',
  templateUrl: './credits-modal.component.html',
  styleUrls: ['./credits-modal.component.scss']
})
export class CreditsModalComponent implements OnInit {

  constructor(
    public creditSwitch: CreditsSwitchService
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.creditSwitch.$creditSwitch.emit(false);
  }

}
