import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleConfig } from '@fitness-app/shared/models';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { TrainingDayDataService } from './service/training-day-data.service';
import { DataPersistence } from '@nrwl/angular';
import { TrainingDaysFacade } from './+state/training-day.facade';
import { TrainingDaysEffects } from './+state/training-days.effects';
import * as fromTrainingDays from './+state/training-days.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromTrainingDays.TRAINING_DAYS_FEATURE_KEY,
      fromTrainingDays.reducer
    ),
    EffectsModule.forFeature([TrainingDaysEffects]),
    ExerciseDataModule
  ]
})
export class CalendarDataModule {
  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: CalendarDataModule,
      providers: [
        TrainingDayDataService,
        DataPersistence,
        TrainingDaysFacade,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
