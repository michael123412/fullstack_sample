import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {
  TrainingDay,
  Training
} from '@fitness-app/calendar/data/calendar-data';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Exercise } from '@fitness-app/exercise/data';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'fitness-app-training-day-configuration',
  templateUrl: './training-day-configuration.component.html',
  styleUrls: ['./training-day-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class TrainingDayConfigurationComponent implements OnInit {
  @Input() trainingDay: TrainingDay;
  @Input() exercises: Exercise[];
  @Input() hideDone: boolean;
  @Output() trainingDayUpated: EventEmitter<TrainingDay> = new EventEmitter<TrainingDay>();

  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      date: ['', [Validators.required]],
      trainings: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    if (this.trainingDay) {
      this.updateFormGroup(this.trainingDay);
    }
    this.formGroup.valueChanges.subscribe((trainingDay: TrainingDay) => {
      this.trainingDayUpated.emit(trainingDay)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.exercise && changes.exercise.currentValue) {
      this.updateFormGroup(changes.exercise.currentValue);
    }
  }

  handleAddExerciseClicked(): void {1
    const array = this.formGroup.get('trainings') as FormArray;
    const form = this.createTrainingFormGroup();
    form.get('order').setValue(array.length);
    array.push(form);
  }

  deleteClicked(index: number) {
    const array = this.formGroup.get('trainings') as FormArray;
    array.removeAt(index);
  }

  drop(event: CdkDragDrop<string[]>) {
      let order = 0;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      (event.container.data as unknown as FormGroup[]).forEach((group: FormGroup) => {
        group.get('order').setValue(order);
        order++;
      });
  }

  private createTrainingFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      exercise: [null],
      exerciseId: ['', [Validators.required]],
      repetitions: [0, [Validators.required]],
      note: [''],
      done: [false],
      order: [null]
    });
  }

  private updateFormGroup(trainingDay: TrainingDay) {    
    const array = this.formGroup.get('trainings') as FormArray;
    array.clear();
    this.formGroup.patchValue(trainingDay);
    
    
    if (trainingDay.trainings) {
      trainingDay.trainings.forEach((training: Training) => {
        const form = this.createTrainingFormGroup();
        form.setValue(training);
        array.push(form);
      });
    }
  }
}
