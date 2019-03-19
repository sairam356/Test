import { TestBed } from '@angular/core/testing';

import { AllcoursedetailsService } from './allcoursedetails.service';

describe('AllcoursedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllcoursedetailsService = TestBed.get(AllcoursedetailsService);
    expect(service).toBeTruthy();
  });
});
