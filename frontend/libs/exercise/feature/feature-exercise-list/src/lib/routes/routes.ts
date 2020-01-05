import { Routes } from '@angular/router';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';

export const EXERCISE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExerciseListComponent
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('@fitness-app/exercise/feature/feature-exercise-edit').then(
        m => m.ExerciseEditModule
      )
  },
  {
    path: 'add',
    loadChildren: () =>
      import('@fitness-app/exercise/feature/feature-exercise-add').then(
        m => m.FeatureExerciseAddModule
      )
  }
];
