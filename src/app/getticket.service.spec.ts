import { TestBed } from '@angular/core/testing';

import { GetticketService } from './getticket.service';

describe('GetticketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetticketService = TestBed.get(GetticketService);
    expect(service).toBeTruthy();
  });
});
