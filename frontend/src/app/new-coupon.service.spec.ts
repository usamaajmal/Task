import { TestBed } from '@angular/core/testing';

import { NewCouponService } from './new-coupon.service';

describe('NewCouponService', () => {
  let service: NewCouponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCouponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
