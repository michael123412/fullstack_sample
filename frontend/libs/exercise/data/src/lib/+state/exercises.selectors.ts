import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EXERCISES_FEATURE_KEY, ExercisesState, adapter } from './exercises.reducer';
import { Exercise } from '../models/exercise';

// Lookup the 'Exercises' feature state managed by NgRx
const getExercisesState = createFeatureSelector<ExercisesState>(
  EXERCISES_FEATURE_KEY
);

const getLoaded = createSelector(
  getExercisesState,
  (state: ExercisesState) => state.loaded
);
const getError = createSelector(
  getExercisesState,
  (state: ExercisesState) => state.error
);

const getAll = createSelector(
  getExercisesState,
  adapter.getSelectors().selectAll,
);

const getAllExercises = createSelector(
  getExercisesState,
  getLoaded,
  (state: ExercisesState, isLoaded) => {
    return isLoaded ? state.entities : [];
  }
);
const getSelectedId = createSelector(
  getExercisesState,
  (state: ExercisesState) => state.selectedId
);
const getSelectedExercises = createSelector(
  getAllExercises,
  getSelectedId,
  (exercises, id) => {
    const result: Exercise = exercises[id]; // exercises.find((exercise: Exercise) => exercise.id === id);    
    // const result = exercises.values.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const exercisesQuery = {
  getLoaded,
  getError,
  getAllExercises,
  getSelectedExercises,
  getAll
};
