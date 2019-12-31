import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExercisesFacade, Exercise } from '@fitness-app/exercise/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fitness-app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseListComponent implements OnInit {
  exercises$: Observable<Array<Exercise>>;
  
  constructor(private exerciseFacade: ExercisesFacade) {
    this.exercises$ = this.exerciseFacade.allExercises$;
  }

  ngOnInit() {
    this.exerciseFacade.loadAll();
  }
}
