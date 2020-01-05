import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { TrainingDay } from '../models/training-day';

export enum TrainingDaysActionTypes {
  LoadTrainingDays = '[TrainingDays] Load TrainingDays',
  TrainingDaysLoaded = '[TrainingDays] TrainingDays Loaded',
  TrainingDaysLoadError = '[TrainingDays] TrainingDays Load Error',
  TrainingDaysError = '[TrainingDays] TrainingDays Error',
  TrainingDaySelected = '[TrainingDays] TrainingDay Selected',
  CreateTrainingDay = '[TrainingDays] Create TrainingDay',
  TrainingDayCreated = '[TrainingDays] TrainingDay Created',
  UpdateTrainingDay = '[TrainingDays] Update TrainingDay',
  TrainingDayUpdated = '[TrainingDays] TrainingDay Updated',
  DeleteTrainingDay = '[TrainingDays] Delete TrainingDay',
  TrainingDayDeleted = '[TrainingDays] TrainingDay Deleted',
  LoadTrainingDay = '[TrainingDays] Load TrainingDay',
  TrainingDayLoaded = '[TrainingDays] TrainingDay Loaded'
}

export class LoadTrainingDays implements Action {
  readonly type = TrainingDaysActionTypes.LoadTrainingDays;
}

export class LoadTrainingDay implements Action {
  readonly type = TrainingDaysActionTypes.LoadTrainingDay;
  constructor(public payload: string) {}
}

export class TrainingDayLoaded implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDayLoaded;
  constructor(public payload: TrainingDay) {}
}

export class TrainingDaysLoadError implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDaysLoadError;
  constructor(public payload: any) {}
}

export class TrainingDayError implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDaysError;
  constructor(public payload: any) {}
}

export class TrainingDaysLoaded implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDaysLoaded;
  constructor(public payload: TrainingDay[]) {}
}

export class TrainingDaySelected implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDaySelected;
  constructor(public payload: string) {}
}

export class CreateTrainingDay implements Action {
  readonly type = TrainingDaysActionTypes.CreateTrainingDay;
  constructor(public payload: TrainingDay) {}
}

export class TrainingDayCreated implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDayCreated;
  constructor(public payload: TrainingDay) {}
}

export class DeleteTrainingDay implements Action {
  readonly type = TrainingDaysActionTypes.DeleteTrainingDay;
  constructor(public payload: string) {}
}

export class TrainingDayDeleted implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDayDeleted;
  constructor(public payload: TrainingDay) {}
}

export class UpdateTrainingDay implements Action {
  readonly type = TrainingDaysActionTypes.UpdateTrainingDay;
  constructor(public payload: Update<TrainingDay>) {}
}

export class TrainingDayUpdated implements Action {
  readonly type = TrainingDaysActionTypes.TrainingDayUpdated;
  constructor(public payload: Update<TrainingDay>) {}
}

export type TrainingDaysAction =
  | LoadTrainingDays
  | TrainingDaysLoaded
  | TrainingDaysLoadError
  | TrainingDaySelected
  | CreateTrainingDay
  | TrainingDayCreated
  | UpdateTrainingDay
  | TrainingDayUpdated
  | DeleteTrainingDay 
  | TrainingDayDeleted
  | LoadTrainingDay
  | TrainingDayLoaded;

export const fromTrainingDaysActions = {
  LoadTrainingDays,
  TrainingDaysLoaded,
  TrainingDaysLoadError
};
