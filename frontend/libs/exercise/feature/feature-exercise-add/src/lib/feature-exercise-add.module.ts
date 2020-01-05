import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { RouterModule } from '@angular/router';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { ExerciseConfigurationModule } from '@fitness-app/exercise/ui/exercise-configuration';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ExerciseAddComponent
      }
    ]),
    ExerciseDataModule,
    ExerciseConfigurationModule
  ],
  declarations: [ExerciseAddComponent]
})
export class FeatureExerciseAddModule {}
