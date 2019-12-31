import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseDataService } from './service/exercise-data.service';
import { ModuleConfig } from '@fitness-app/shared/models';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromExercises from './+state/exercises.reducer';
import { ExercisesEffects } from './+state/exercises.effects';
import { ExercisesFacade } from './+state/exercises.facade';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromExercises.EXERCISES_FEATURE_KEY,
      fromExercises.reducer
    ),
    EffectsModule.forFeature([ExercisesEffects])
  ]
})
export class ExerciseDataModule {
  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: ExerciseDataModule,
      providers: [
        ExerciseDataService,         
        DataPersistence,
        ExercisesFacade,
        { provide: 'config', useValue: config }
    ]
    };
  }
}
