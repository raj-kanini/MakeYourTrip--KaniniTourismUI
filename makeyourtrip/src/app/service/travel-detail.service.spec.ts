import { TestBed } from '@angular/core/testing';

import { TravelDetailService } from './travel-detail.service';

describe('TravelDetailService', () => {
  let service: TravelDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
