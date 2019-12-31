import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ExercisesPartialState } from './exercises.reducer';
import { exercisesQuery } from './exercises.selectors';
import {
  LoadExercises,
  CreateExercise,
  DeleteExercise,
  UpdateExercise
} from './exercises.actions';
import { Exercise } from '../models/exercise';
import { Observable } from 'rxjs';

@Injectable()
export class ExercisesFacade {
  loaded$ = this.store.pipe(select(exercisesQuery.getLoaded));
  allExercises$: Observable<Array<Exercise>> = this.store.pipe(select(exercisesQuery.getAll));
  selectedExercises$ = this.store.pipe(
    select(exercisesQuery.getSelectedExercises)
  );

  constructor(private store: Store<ExercisesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadExercises());
  }

  create(exercise: Exercise) {
    this.store.dispatch(new CreateExercise(exercise));
  }

  delete(id: string) {
    this.store.dispatch(new DeleteExercise(id));
  }

  update(exercise: Exercise) {
    this.store.dispatch(
      new UpdateExercise({ id: exercise.id, changes: exercise })
    );
  }
}
