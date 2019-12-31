import { ExercisesState } from './exercises.reducer';
import { exercisesQuery } from './exercises.selectors';
import { ExerciseType } from '../models/exercise-type.enum';
import { Exercise } from '../models/exercise';

describe('Exercises Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getExercisesId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createExercises = (id: string, name = '', description = ''): Exercise => ({
      id,
      name: name || `name-${id}`,
      description: description,
      type: ExerciseType.Mixed
    });
    storeState = {
      exercises: {
        list: [
          createExercises('PRODUCT-AAA'),
          createExercises('PRODUCT-BBB'),
          createExercises('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Exercises Selectors', () => {
    it('getAllExercises() should return the list of Exercises', () => {
      const results = exercisesQuery.getAllExercises(storeState);
      const selId = getExercisesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedExercises() should return the selected Exercise', () => {
      const result = exercisesQuery.getSelectedExercises(storeState);
      const selId = getExercisesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = exercisesQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = exercisesQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
