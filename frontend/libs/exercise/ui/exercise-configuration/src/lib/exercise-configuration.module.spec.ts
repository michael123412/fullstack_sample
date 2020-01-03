import { async, TestBed } from '@angular/core/testing';
import { ExerciseConfigurationModule } from './exercise-configuration.module';

describe('ExerciseConfigurationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExerciseConfigurationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExerciseConfigurationModule).toBeDefined();
  });
});
