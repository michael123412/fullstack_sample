import { TrainingDaysLoaded } from './training-days.actions';
import {
  TrainingDaysState,
  initialState,
  reducer
} from './training-days.reducer';
import { TrainingDay } from '../models/training-day';

describe('TrainingDays Reducer', () => {
  const getTrainingDaysId = it => it['id'];
  let createTrainingDays;

  beforeEach(() => {
    createTrainingDays = (
      id: string
    ): TrainingDay => ({
      id,
      date: new Date(),
      trainings: []
    });
  });

  describe('valid TrainingDays actions ', () => {
    it('should return set the list of known TrainingDays', () => {
      const trainingDays = [
        createTrainingDays('PRODUCT-AAA'),
        createTrainingDays('PRODUCT-zzz')
      ];
      const action = new TrainingDaysLoaded(trainingDays);
      const result: TrainingDaysState = reducer(initialState, action);
      const selId: string = getTrainingDaysId(result.entities[1]);

      expect(result.loaded).toBe(true);
      expect(result.entities.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
