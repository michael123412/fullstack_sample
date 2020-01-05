import { Routes } from '@angular/router';

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
    loadChildren: () =>
    import('@fitness-app/calendar/feature/calendar-view').then(
      m => m.CalendarViewModule
    )  }
];
