import { TestBed } from '@angular/core/testing';

import { TrainingDayDataService } from './training-day-data.service';

describe('CalendarDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingDayDataService = TestBed.get(TrainingDayDataService);
    expect(service).toBeTruthy();
  });
});
