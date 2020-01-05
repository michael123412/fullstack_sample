import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { TrainingDaysEffects } from './training-days.effects';
import { TrainingDaysFacade } from './training-days.facade';

import { trainingdaysQuery } from './training-days.selectors';
import { LoadTrainingDays, TrainingDaysLoaded } from './training-days.actions';
import {
  TrainingDaysState,  
  initialState,
  reducer
} from './training-days.reducer';
import { TrainingDay } from '../models/training-day';

interface TestSchema {
  trainingDays: TrainingDaysState;
}

describe('TrainingDaysFacade', () => {
  let facade: TrainingDaysFacade;
  let store: Store<TestSchema>;
  let createTrainingDays;

  beforeEach(() => {
    createTrainingDays = (id: string, name = '', description = ''): TrainingDay => ({
      id,
      name: name || `name-${id}`,
      description: description
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('trainingdays', reducer, { initialState }),
          EffectsModule.forFeature([TrainingDaysEffects])
        ],
        providers: [TrainingDaysFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TrainingDaysFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTrainingDays$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allTrainingDays$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `TrainingDaysLoaded` to manually submit list for state management
     */
    it('allTrainingDays$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTrainingDays$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new TrainingDaysLoaded([createTrainingDays('AAA'), createTrainingDays('BBB')])
        );

        list = await readFirst(facade.allTrainingDays$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
