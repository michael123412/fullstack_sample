import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseDataService } from './service/exercise-data-service.service';
import {ModuleConfig} from '@fitness-app/shared/models'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ExerciseDataModule { 
  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: ExerciseDataModule,
      providers: [ExerciseDataService, {provide: 'config', useValue: config}]
    };
  }
}
