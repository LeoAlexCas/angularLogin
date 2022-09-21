import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditsSwitchService {

  constructor() { }

  $creditSwitch = new EventEmitter<boolean>;
}
