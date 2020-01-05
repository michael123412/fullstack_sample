import { TrainingDaysState } from './training-days.reducer';
import { trainingDaysQuery } from './training-days.selectors';
import { TrainingDay } from '../models/training-day';

describe('TrainingDays Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTrainingDaysId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createTrainingDays = (id: string, name = '', description = ''): TrainingDay => ({
      id,
      date: new Date(),
      trainings: []
    });
    storeState = {
      trainingDays: {
        list: [
          createTrainingDays('PRODUCT-AAA'),
          createTrainingDays('PRODUCT-BBB'),
          createTrainingDays('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('TrainingDays Selectors', () => {
    it('getAllTrainingDays() should return the list of TrainingDays', () => {
      const results = trainingDaysQuery.getAllTrainingDays(storeState);
      const selId = getTrainingDaysId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedTrainingDays() should return the selected TrainingDay', () => {
      const result = trainingDaysQuery.getSelectedTrainingDays(storeState);
      const selId = getTrainingDaysId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = trainingDaysQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = trainingDaysQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
