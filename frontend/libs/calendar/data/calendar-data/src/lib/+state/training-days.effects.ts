import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { TrainingDaysPartialState } from './training-days.reducer';
import {
  LoadTrainingDays,
  TrainingDaysLoaded,
  TrainingDaysLoadError,
  TrainingDaysActionTypes,
  CreateTrainingDay,
  TrainingDayCreated,
  TrainingDayError,
  TrainingDayUpdated,
  UpdateTrainingDay,
  DeleteTrainingDay,
  TrainingDayDeleted,
  LoadTrainingDay,
  TrainingDayLoaded
} from './training-days.actions';
import { TrainingDayDataService } from '../service/training-day-data.service';
import { TrainingDay } from '../models/training-day';
import { map } from 'rxjs/operators';

@Injectable()
export class TrainingDaysEffects {
  @Effect() loadTrainingDays$ = this.dataPersistence.fetch(
    TrainingDaysActionTypes.LoadTrainingDays,
    {
      run: (action: LoadTrainingDays, state: TrainingDaysPartialState) => {
        return this.trainingDayDataService.getAll().pipe(
          map(
            (trainingDays: TrainingDay[]) => new TrainingDaysLoaded(trainingDays),
          ));
      },

      onError: (action: LoadTrainingDays, error) => {
        console.error('Error', error);
        return new TrainingDaysLoadError(error);
      }
    }
  );

  @Effect() loadTrainingDay$ = this.dataPersistence.fetch(
    TrainingDaysActionTypes.LoadTrainingDay,
    {
      run: (action: LoadTrainingDay, state: TrainingDaysPartialState) => {
        return this.trainingDayDataService.getForId(action.payload).pipe(
          map(
            (trainingDay: TrainingDay) => new TrainingDayLoaded(trainingDay),
          ));
      },

      onError: (action: LoadTrainingDay, error) => {
        console.error('Error', error);
        return new TrainingDaysLoadError(error);
      }
    }
  );

  @Effect() createTrainingDay$ = this.dataPersistence.pessimisticUpdate(
    TrainingDaysActionTypes.CreateTrainingDay,
    {
      run: (action: CreateTrainingDay, state: TrainingDaysPartialState) => {
        return this.trainingDayDataService.create(action.payload).pipe(
          map(
            (trainingDay: TrainingDay) => new TrainingDayCreated(trainingDay),
          ));
      },

      onError: (action: CreateTrainingDay, error) => {
        console.error('Error', error);
        return new TrainingDayError(error);
      }
    }
  );

  @Effect() updateTrainingDay$ = this.dataPersistence.pessimisticUpdate(
    TrainingDaysActionTypes.UpdateTrainingDay,
    {
      run: (action: UpdateTrainingDay, state: TrainingDaysPartialState) => {
        return this.trainingDayDataService.update(action.payload.id as string, action.payload.changes as TrainingDay).pipe(
          map(
            (trainingDay: TrainingDay) => {
              return new TrainingDayUpdated({ id: action.payload.id as string, changes: action.payload.changes as TrainingDay}) 
            }
          ));
      },

      onError: (action: UpdateTrainingDay, error) => {
        console.error('Error', error);
        return new TrainingDayError(error);
      }
    }
  );

  @Effect() deleteTrainingDay$ = this.dataPersistence.pessimisticUpdate(
    TrainingDaysActionTypes.DeleteTrainingDay,
    {
      run: (action: DeleteTrainingDay, state: TrainingDaysPartialState) => {
        return this.trainingDayDataService.delete(action.payload).pipe(
          map(
            (trainingDay: TrainingDay) => new TrainingDayDeleted(trainingDay),
          ));
      },

      onError: (action: DeleteTrainingDay, error) => {
        console.error('Error', error);
        return new TrainingDayError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TrainingDaysPartialState>,
    private trainingDayDataService: TrainingDayDataService
  ) {}
}
