import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ExercisesEffects } from './exercises.effects';
import { ExercisesFacade } from './exercises.facade';

import { exercisesQuery } from './exercises.selectors';
import { LoadExercises, ExercisesLoaded } from './exercises.actions';
import {
  ExercisesState,  
  initialState,
  reducer
} from './exercises.reducer';
import { Exercise } from '../models/exercise';
import { ExerciseType } from '../models/exercise-type.enum';

interface TestSchema {
  exercises: ExercisesState;
}

describe('ExercisesFacade', () => {
  let facade: ExercisesFacade;
  let store: Store<TestSchema>;
  let createExercises;

  beforeEach(() => {
    createExercises = (id: string, name = '', description = ''): Exercise => ({
      id,
      name: name || `name-${id}`,
      description: description, 
      type: ExerciseType.Mixed
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('exercises', reducer, { initialState }),
          EffectsModule.forFeature([ExercisesEffects])
        ],
        providers: [ExercisesFacade]
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
      facade = TestBed.get(ExercisesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allExercises$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allExercises$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ExercisesLoaded` to manually submit list for state management
     */
    it('allExercises$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allExercises$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new ExercisesLoaded([createExercises('AAA'), createExercises('BBB')])
        );

        list = await readFirst(facade.allExercises$);
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
