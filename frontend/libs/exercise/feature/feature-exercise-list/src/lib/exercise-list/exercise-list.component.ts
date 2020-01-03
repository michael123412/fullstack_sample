import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ExercisesFacade,
  Exercise,
  ExerciseType
} from '@fitness-app/exercise/data';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogComponent,
  DialogData
} from '@fitness-app/shared/ui/confirm-dialog';

@Component({
  selector: 'fitness-app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseListComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  loaded$: Observable<boolean>;
  displayedColumns: string[] = [
    'name',
    'description',
    'type',
    'edit',
    'delete'
  ];

  ExerciseType = ExerciseType;

  constructor(
    private exerciseFacade: ExercisesFacade,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.exercises$ = this.exerciseFacade.allExercises$;
    this.loaded$ = this.exerciseFacade.loaded$;
  }

  ngOnInit() {
    this.exerciseFacade.loadAll();
  }

  addExercise() {
    this.router.navigate(['/add'], { relativeTo: this.route });
  }

  editClicked(exercise: Exercise) {
    this.router.navigate([`edit/${exercise.id}`], { relativeTo: this.route });
  }

  deleteClicked(exercise: Exercise) {
    const dialogData: DialogData = {
      title: 'Delete',
      description: 'Are you sure that you want to delete this exercise?',
      confirmText: 'Delete',
      declineText: 'Return'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.exerciseFacade.delete(exercise.id);
      }
    });
  }
}
