import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExercisesFacade, Exercise } from '@fitness-app/exercise/data';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fitness-app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseEditComponent implements OnInit {
  selectedExercise$: Observable<Exercise> ;

  constructor(private exercisesFacade: ExercisesFacade,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedExercise$ = this.exercisesFacade.selectedExercises$;
  }

  handleCancelClicked(): void {
    this.router.navigate(['exercises']);
  }

  handleConfirmClicked(exercise: Exercise): void {
    this.exercisesFacade.update(exercise);
    this.router.navigate(['exercises']);
  }
}
