import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise, ExercisesFacade } from '@fitness-app/exercise/data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fitness-app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseAddComponent implements OnInit {
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
    this.exercisesFacade.create(exercise);
    this.router.navigate(['exercises']);
  }
}
