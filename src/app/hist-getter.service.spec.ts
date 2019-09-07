import { TestBed } from '@angular/core/testing';

import { HistGetterService } from './hist-getter.service';

describe('HistGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistGetterService = TestBed.get(HistGetterService);
    expect(service).toBeTruthy();
  });
});
