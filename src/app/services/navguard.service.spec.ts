import { TestBed } from '@angular/core/testing';

import { NavguardService } from './navguard.service';

describe('NavguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavguardService = TestBed.get(NavguardService);
    expect(service).toBeTruthy();
  });
});
