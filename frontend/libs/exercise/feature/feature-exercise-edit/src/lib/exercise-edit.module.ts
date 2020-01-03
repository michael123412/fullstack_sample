import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';
import { RouterModule } from '@angular/router';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { ExerciseEditResolver } from './resolver/exercise-edit-resolver.service';
import { ExerciseConfigurationModule } from '@fitness-app/exercise/ui/exercise-configuration';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        pathMatch: 'full',
        resolve: {
          exerciseEditResolver: ExerciseEditResolver
        },
        component: ExerciseEditComponent
      }
    ]),
    ExerciseDataModule,
    ExerciseConfigurationModule
  ],
  declarations: [ExerciseEditComponent]
})
export class ExerciseEditModule {}
