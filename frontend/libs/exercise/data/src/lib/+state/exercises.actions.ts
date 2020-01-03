import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Exercise } from '../models/exercise';

export enum ExercisesActionTypes {
  LoadExercises = '[Exercises] Load Exercises',
  ExercisesLoaded = '[Exercises] Exercises Loaded',
  ExercisesLoadError = '[Exercises] Exercises Load Error',
  ExercisesError = '[Exercises] Exercises Error',
  ExerciseSelected = '[Exercises] Exercise Selected',
  CreateExercise = '[Exercises] Create Exercise',
  ExerciseCreated = '[Exercises] Exercise Created',
  UpdateExercise = '[Exercises] Update Exercise',
  ExerciseUpdated = '[Exercises] Exercise Updated',
  DeleteExercise = '[Exercises] Delete Exercise',
  ExerciseDeleted = '[Exercises] Exercise Deleted',
  LoadExercise = '[Exercises] Load Exercise',
  ExerciseLoaded = '[Exercises] Exercise Loaded'
}

export class LoadExercises implements Action {
  readonly type = ExercisesActionTypes.LoadExercises;
}

export class LoadExercise implements Action {
  readonly type = ExercisesActionTypes.LoadExercise;
  constructor(public payload: string) {}
}

export class ExerciseLoaded implements Action {
  readonly type = ExercisesActionTypes.ExerciseLoaded;
  constructor(public payload: Exercise) {}
}

export class ExercisesLoadError implements Action {
  readonly type = ExercisesActionTypes.ExercisesLoadError;
  constructor(public payload: any) {}
}

export class ExerciseError implements Action {
  readonly type = ExercisesActionTypes.ExercisesError;
  constructor(public payload: any) {}
}

export class ExercisesLoaded implements Action {
  readonly type = ExercisesActionTypes.ExercisesLoaded;
  constructor(public payload: Exercise[]) {}
}

export class ExerciseSelected implements Action {
  readonly type = ExercisesActionTypes.ExerciseSelected;
  constructor(public payload: string) {}
}

export class CreateExercise implements Action {
  readonly type = ExercisesActionTypes.CreateExercise;
  constructor(public payload: Exercise) {}
}

export class ExerciseCreated implements Action {
  readonly type = ExercisesActionTypes.ExerciseCreated;
  constructor(public payload: Exercise) {}
}

export class DeleteExercise implements Action {
  readonly type = ExercisesActionTypes.DeleteExercise;
  constructor(public payload: string) {}
}

export class ExerciseDeleted implements Action {
  readonly type = ExercisesActionTypes.ExerciseDeleted;
  constructor(public payload: Exercise) {}
}

export class UpdateExercise implements Action {
  readonly type = ExercisesActionTypes.UpdateExercise;
  constructor(public payload: Update<Exercise>) {}
}

export class ExerciseUpdated implements Action {
  readonly type = ExercisesActionTypes.ExerciseUpdated;
  constructor(public payload: Update<Exercise>) {}
}

export type ExercisesAction =
  | LoadExercises
  | ExercisesLoaded
  | ExercisesLoadError
  | ExerciseSelected
  | CreateExercise
  | ExerciseCreated
  | UpdateExercise
  | ExerciseUpdated
  | DeleteExercise 
  | ExerciseDeleted
  | LoadExercise
  | ExerciseLoaded;

export const fromExercisesActions = {
  LoadExercises,
  ExercisesLoaded,
  ExercisesLoadError
};
