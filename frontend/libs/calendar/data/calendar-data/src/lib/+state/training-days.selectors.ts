import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRAINING_DAYS_FEATURE_KEY, TrainingDaysState, adapter } from './training-days.reducer';
import { TrainingDay } from '../models/training-day';

// Lookup the 'TrainingDays' feature state managed by NgRx
const getTrainingDaysState = createFeatureSelector<TrainingDaysState>(
  TRAINING_DAYS_FEATURE_KEY
);

const getLoaded = createSelector(
  getTrainingDaysState,
  (state: TrainingDaysState) => state.loaded
);
const getError = createSelector(
  getTrainingDaysState,
  (state: TrainingDaysState) => state.error
);

const getAll = createSelector(
  getTrainingDaysState,
  adapter.getSelectors().selectAll,
);

const getAllTrainingDays = createSelector(
  getTrainingDaysState,
  getLoaded,
  (state: TrainingDaysState, isLoaded) => {
    return isLoaded ? state.entities : [];
  }
);
const getSelectedId = createSelector(
  getTrainingDaysState,
  (state: TrainingDaysState) => state.selectedId
);
const getSelectedTrainingDays = createSelector(
  getAllTrainingDays,
  getSelectedId,
  (trainingDays, id) => {
    const result: TrainingDay = trainingDays[id]; // trainingDays.find((trainingDay: TrainingDay) => trainingDay.id === id);    
    // const result = trainingDays.values.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const trainingDaysQuery = {
  getLoaded,
  getError,
  getAllTrainingDays,
  getSelectedTrainingDays,
  getAll
};
