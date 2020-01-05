import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TrainingDaysEffects } from './training-days.effects';
import { LoadTrainingDays, TrainingDaysLoaded } from './training-days.actions';

describe('TrainingDaysEffects', () => {
  let actions: Observable<any>;
  let effects: TrainingDaysEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        TrainingDaysEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(TrainingDaysEffects);
  });

  describe('loadTrainingDays$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadTrainingDays() });
      expect(effects.loadTrainingDays$).toBeObservable(
        hot('-a-|', { a: new TrainingDaysLoaded([]) })
      );
    });
  });
});
