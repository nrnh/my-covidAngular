import { TestBed } from '@angular/core/testing';

import { CovidDeleteService } from './covid-delete.service';

describe('CovidDeleteService', () => {
  let service: CovidDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
