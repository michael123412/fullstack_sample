import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { TrainingDay } from '@fitness-app/calendar/data/calendar-data';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExercisesFacade, Exercise } from '@fitness-app/exercise/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fitness-app-training-day-configuration-dialog',
  templateUrl: './training-day-configuration-dialog.component.html',
  styleUrls: ['./training-day-configuration-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingDayConfigurationDialogComponent implements OnInit {
  updatedTrainingDay: TrainingDay;
  exercises$: Observable<Exercise[]>;

  constructor(
    public dialogRef: MatDialogRef<TrainingDayConfigurationDialogComponent>,
    public exercisesFacade: ExercisesFacade,
    @Inject(MAT_DIALOG_DATA) public trainingDay: TrainingDay
  ) {
    this.exercises$ = this.exercisesFacade.allExercises$;
    this.exercisesFacade.loadAll();
  }

  ngOnInit() {
    this.updatedTrainingDay = this.trainingDay;
  }

  handleTrainingDayUpdated(trainingDay: TrainingDay) {
    this.updatedTrainingDay = trainingDay;
  }

  close(confirmed: boolean) {
    this.dialogRef.close({
      confirmed,
      trainingDay: this.updatedTrainingDay
    });
  }
}
