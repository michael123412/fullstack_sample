import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TrainingDaysPartialState } from './training-days.reducer';
import { trainingDaysQuery } from './training-days.selectors';
import {
  LoadTrainingDays,
  CreateTrainingDay,
  DeleteTrainingDay,
  UpdateTrainingDay,
  TrainingDaySelected,
  LoadTrainingDay
} from './training-days.actions';
import { TrainingDay } from '../models/training-day';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingDaysFacade {
  loaded$ = this.store.pipe(select(trainingDaysQuery.getLoaded));
  allTrainingDays$: Observable<TrainingDay[]> = this.store.pipe(select(trainingDaysQuery.getAll));
  selectedTrainingDays$: Observable<TrainingDay>  = this.store.pipe(
    select(trainingDaysQuery.getSelectedTrainingDays)
  );

  constructor(private store: Store<TrainingDaysPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadTrainingDays());
  }

  loadSingle(id: string) {
    this.store.dispatch(new LoadTrainingDay(id));
  }

  create(trainingDay: TrainingDay) {
    this.store.dispatch(new CreateTrainingDay(trainingDay));
  }

  delete(id: string) {
    this.store.dispatch(new DeleteTrainingDay(id));
  }

  update(trainingDay: TrainingDay) {
    this.store.dispatch(
      new UpdateTrainingDay({ id: trainingDay.id, changes: trainingDay })
    );
  }

  select(id: string) {
    this.store.dispatch(new TrainingDaySelected(id));
  }
}
