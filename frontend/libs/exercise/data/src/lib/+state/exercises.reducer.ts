import { ExercisesAction, ExercisesActionTypes } from './exercises.actions';
import { Exercise } from '../models/exercise';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export const EXERCISES_FEATURE_KEY = 'exercises';

export interface ExercisesState extends EntityState<Exercise> {
  selectedId?: string | number; // which Exercises record has been selected
  loaded: boolean; // has the Exercises list been loaded
  error?: any; // last none error (if any)
}

export function selectId(a: Exercise): string {
  //In this case this would be optional since primary key is id
  return a.id;
}
export function sortByName(a: Exercise, b: Exercise): number {
  return a.name.localeCompare(b.name);
}
export const adapter: EntityAdapter<Exercise> = createEntityAdapter<Exercise>({
  selectId: selectId,
  sortComparer: sortByName,
});

export interface ExercisesPartialState {
  readonly [EXERCISES_FEATURE_KEY]: ExercisesState;
}

export const initialState: ExercisesState = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,  
  loaded: false
});

export function reducer(
  state: ExercisesState = initialState,
  action: ExercisesAction
): ExercisesState {
  switch (action.type) {
    case ExercisesActionTypes.ExercisesLoaded: {
      return adapter.addAll(action.payload, {
        ...state,
        loaded: true
      });
    }
    case ExercisesActionTypes.ExerciseSelected: {
      state = {
        ...state,
        selectedId: action.payload        
      };
      break;
    }
    case ExercisesActionTypes.ExerciseUpdated: {
      return adapter.updateOne(action.payload, state);
    }
    case ExercisesActionTypes.ExerciseCreated: {
      return adapter.addOne(action.payload, state);
    }
    case ExercisesActionTypes.ExerciseDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
  }
  return state;
}
