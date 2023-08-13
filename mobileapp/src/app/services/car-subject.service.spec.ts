import { TestBed } from '@angular/core/testing';

import { CarSubjectService } from './car-subject.service';

describe('CarSubjectService', () => {
  let service: CarSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
