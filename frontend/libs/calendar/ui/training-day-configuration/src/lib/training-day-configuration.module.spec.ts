import { async, TestBed } from '@angular/core/testing';
import { TrainingDayConfigurationModule } from './training-day-configuration.module';

describe('TrainingDayConfigurationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TrainingDayConfigurationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TrainingDayConfigurationModule).toBeDefined();
  });
});
