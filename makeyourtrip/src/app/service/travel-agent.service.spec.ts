import { TestBed } from '@angular/core/testing';

import { TravelAgentService } from './travel-agent.service';

describe('TravelAgentService', () => {
  let service: TravelAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
