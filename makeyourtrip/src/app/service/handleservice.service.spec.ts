import { TestBed } from '@angular/core/testing';

import { HandleserviceService } from './handleservice.service';

describe('HandleserviceService', () => {
  let service: HandleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
