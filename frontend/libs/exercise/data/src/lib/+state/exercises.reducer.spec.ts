import { ExercisesLoaded } from './exercises.actions';
import {
  ExercisesState,  
  initialState,
  reducer
} from './exercises.reducer';
import { Exercise } from '../models/exercise';
import { ExerciseType } from '../models/exercise-type.enum';

describe('Exercises Reducer', () => {
  const getExercisesId = it => it['id'];
  let createExercises;

  beforeEach(() => {
    createExercises = (id: string, name = '', description = ''): Exercise => ({
      id,
      name: name || `name-${id}`,
      description: description,
      type: ExerciseType.Mixed
    });
  });

  describe('valid Exercises actions ', () => {
    it('should return set the list of known Exercises', () => {
      const exercisess = [
        createExercises('PRODUCT-AAA'),
        createExercises('PRODUCT-zzz')
      ];
      const action = new ExercisesLoaded(exercisess);
      const result: ExercisesState = reducer(initialState, action);
      const selId: string = getExercisesId(result.entities[1]);

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
