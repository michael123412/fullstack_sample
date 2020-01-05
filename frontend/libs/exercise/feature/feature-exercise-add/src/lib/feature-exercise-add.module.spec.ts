import { async, TestBed } from '@angular/core/testing';
import { FeatureExerciseAddModule } from './feature-exercise-add.module';

describe('FeatureExerciseAddModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureExerciseAddModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureExerciseAddModule).toBeDefined();
  });
});
