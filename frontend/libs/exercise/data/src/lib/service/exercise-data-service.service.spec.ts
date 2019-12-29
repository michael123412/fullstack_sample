import { TestBed } from '@angular/core/testing';

import { ExerciseDataServiceService } from './exercise-data-service.service';

describe('ExerciseDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseDataServiceService = TestBed.get(ExerciseDataServiceService);
    expect(service).toBeTruthy();
  });
});
