import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ExercisesEffects } from './exercises.effects';
import { LoadExercises, ExercisesLoaded } from './exercises.actions';

describe('ExercisesEffects', () => {
  let actions: Observable<any>;
  let effects: ExercisesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ExercisesEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ExercisesEffects);
  });

  describe('loadExercises$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadExercises() });
      expect(effects.loadExercises$).toBeObservable(
        hot('-a-|', { a: new ExercisesLoaded([]) })
      );
    });
  });
});
