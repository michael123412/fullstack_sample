import { async, TestBed } from '@angular/core/testing';
import { ExerciseListModule } from './exercise-list.module';

describe('ExerciseFeatureFeatureExerciseListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExerciseListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExerciseListModule).toBeDefined();
  });
});
