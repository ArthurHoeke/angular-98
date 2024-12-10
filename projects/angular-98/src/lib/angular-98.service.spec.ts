import { TestBed } from '@angular/core/testing';

import { Angular98Service } from './angular-98.service';

describe('Angular98Service', () => {
  let service: Angular98Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular98Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
