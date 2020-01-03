import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseDataModule } from '@fitness-app/exercise/data';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { RouterModule } from '@angular/router';
import { EXERCISE_ROUTES } from './routes/routes';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogModule } from '@fitness-app/shared/ui/confirm-dialog';

@NgModule({
  imports: [
    CommonModule,
    ExerciseDataModule,
    RouterModule.forChild(EXERCISE_ROUTES),
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ConfirmDialogModule
  ],
  declarations: [ExerciseListComponent],
  exports: [ExerciseListComponent]
})
export class ExerciseListModule {}
