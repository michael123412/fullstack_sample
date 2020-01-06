import { TrainingDaysAction, TrainingDaysActionTypes } from './training-days.actions';
import { TrainingDay } from '../models/training-day';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export const TRAINING_DAYS_FEATURE_KEY = 'trainingDays';

export interface TrainingDaysState extends EntityState<TrainingDay> {
  selectedId?: string | number; // which TrainingDays record has been selected
  loaded: boolean; // has the TrainingDays list been loaded
  error?: any; // last none error (if any)
}

export function selectId(a: TrainingDay): string {
  //In this case this would be optional since primary key is id
  return a.id;
}
export function sortByName(a: TrainingDay, b: TrainingDay): number {
  return a.date.localeCompare(b.date);
}
export const adapter: EntityAdapter<TrainingDay> = createEntityAdapter<TrainingDay>({
  selectId: selectId,
  sortComparer: sortByName,
});

export interface TrainingDaysPartialState {
  readonly [TRAINING_DAYS_FEATURE_KEY]: TrainingDaysState;
}

export const initialState: TrainingDaysState = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,  
  loaded: false
});

export function reducer(
  state: TrainingDaysState = initialState,
  action: TrainingDaysAction
): TrainingDaysState {
  switch (action.type) {
    case TrainingDaysActionTypes.TrainingDaysLoaded: {
      return adapter.addAll(action.payload, {
        ...state,
        loaded: true
      });
    }
    case TrainingDaysActionTypes.TrainingDaySelected: {
      state = {
        ...state,
        selectedId: action.payload        
      };
      break;
    }
    case TrainingDaysActionTypes.TrainingDayUpdated: {
      return adapter.updateOne(action.payload, state);
    }
    case TrainingDaysActionTypes.TrainingDayCreated: {
      return adapter.addOne(action.payload, state);
    }
    case TrainingDaysActionTypes.TrainingDayDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    case TrainingDaysActionTypes.TrainingDayLoaded: {
      return adapter.addOne(action.payload, {
        ...state,
        // set loaded for getAll Selector. 
        loaded: true
      });
    }
  }
  return state;
}
