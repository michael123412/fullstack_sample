import { Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

export const ROUTES: Routes = [
  {
    path: 'exercises',
    loadChildren: () =>
      import('@fitness-app/exercise/feature/feature-exercise-list').then(
        m => m.ExerciseListModule
      )
  },
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  }
];
