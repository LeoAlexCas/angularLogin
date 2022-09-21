import { TestBed } from '@angular/core/testing';

import { CreditsSwitchService } from './credits-switch.service';

describe('CreditsSwitchService', () => {
  let service: CreditsSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditsSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
