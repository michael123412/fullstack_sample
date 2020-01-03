import { async, TestBed } from '@angular/core/testing';
import { ExerciseEditModule } from './exercise-edit.module';

describe('ExerciseEditModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExerciseEditModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExerciseEditModule).toBeDefined();
  });
});
