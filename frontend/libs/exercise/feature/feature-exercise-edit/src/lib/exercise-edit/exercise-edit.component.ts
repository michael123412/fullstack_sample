import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExercisesFacade, Exercise } from '@fitness-app/exercise/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fitness-app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseEditComponent implements OnInit {
  selectedExercise$: Observable<Exercise> ;

  constructor(private exercisesFacade: ExercisesFacade) { }

  ngOnInit() {
    this.selectedExercise$ = this.exercisesFacade.selectedExercises$;
    this.selectedExercise$.subscribe((exercise: Exercise) => {
      console.log(exercise);
    });
  }

}
