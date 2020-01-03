import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ExercisesPartialState } from './exercises.reducer';
import {
  LoadExercises,
  ExercisesLoaded,
  ExercisesLoadError,
  ExercisesActionTypes,
  CreateExercise,
  ExerciseCreated,
  ExerciseError,
  ExerciseUpdated,
  UpdateExercise,
  DeleteExercise,
  ExerciseDeleted,
  LoadExercise,
  ExerciseLoaded
} from './exercises.actions';
import { ExerciseDataService } from '../service/exercise-data.service';
import { Exercise } from '../models/exercise';
import { map } from 'rxjs/operators';

@Injectable()
export class ExercisesEffects {
  @Effect() loadExercises$ = this.dataPersistence.fetch(
    ExercisesActionTypes.LoadExercises,
    {
      run: (action: LoadExercises, state: ExercisesPartialState) => {
        return this.exerciseDataService.getAll().pipe(
          map(
            (exercises: Exercise[]) => new ExercisesLoaded(exercises),
          ));
      },

      onError: (action: LoadExercises, error) => {
        console.error('Error', error);
        return new ExercisesLoadError(error);
      }
    }
  );

  @Effect() loadExercise$ = this.dataPersistence.fetch(
    ExercisesActionTypes.LoadExercise,
    {
      run: (action: LoadExercise, state: ExercisesPartialState) => {
        return this.exerciseDataService.getForId(action.payload).pipe(
          map(
            (exercise: Exercise) => new ExerciseLoaded(exercise),
          ));
      },

      onError: (action: LoadExercise, error) => {
        console.error('Error', error);
        return new ExercisesLoadError(error);
      }
    }
  );

  @Effect() createExercise$ = this.dataPersistence.pessimisticUpdate(
    ExercisesActionTypes.CreateExercise,
    {
      run: (action: CreateExercise, state: ExercisesPartialState) => {
        return this.exerciseDataService.create(action.payload).pipe(
          map(
            (exercise: Exercise) => new ExerciseCreated(exercise),
          ));
      },

      onError: (action: CreateExercise, error) => {
        console.error('Error', error);
        return new ExerciseError(error);
      }
    }
  );

  @Effect() updateExercise$ = this.dataPersistence.pessimisticUpdate(
    ExercisesActionTypes.UpdateExercise,
    {
      run: (action: UpdateExercise, state: ExercisesPartialState) => {
        return this.exerciseDataService.update(action.payload.id as string, action.payload.changes as Exercise).pipe(
          map(
            (exercise: Exercise) => {
              console.log(exercise);
              return new ExerciseUpdated({ id: action.payload.id as string, changes: action.payload.changes as Exercise}) 
            }
          ));
      },

      onError: (action: UpdateExercise, error) => {
        console.error('Error', error);
        return new ExerciseError(error);
      }
    }
  );

  @Effect() deleteExercise$ = this.dataPersistence.pessimisticUpdate(
    ExercisesActionTypes.DeleteExercise,
    {
      run: (action: DeleteExercise, state: ExercisesPartialState) => {
        return this.exerciseDataService.delete(action.payload).pipe(
          map(
            (exercise: Exercise) => new ExerciseDeleted(exercise),
          ));
      },

      onError: (action: DeleteExercise, error) => {
        console.error('Error', error);
        return new ExerciseError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ExercisesPartialState>,
    private exerciseDataService: ExerciseDataService
  ) {}
}
