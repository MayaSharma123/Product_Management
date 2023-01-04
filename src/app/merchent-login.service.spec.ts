import { TestBed } from '@angular/core/testing';

import { MerchentLoginService } from './merchent-login.service';

describe('MerchentLoginService', () => {
  let service: MerchentLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchentLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
