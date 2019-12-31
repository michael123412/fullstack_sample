import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ModuleConfig } from '@fitness-app/shared/models';
@NgModule({
  imports: [
    CommonModule,
    ExerciseDataModule],
  declarations: [ExerciseListComponent],
  exports: [ExerciseListComponent]
})
export class ExerciseListModule { }
