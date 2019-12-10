import { TestBed } from '@angular/core/testing';

import { HomeDashboardService } from './home-dashboard.service';

describe('HomeDahboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeDashboardService = TestBed.get(HomeDashboardService);
    expect(service).toBeTruthy();
  });
});
