import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Exercise, ExerciseType } from '@fitness-app/exercise/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fitness-app-exercise-configuration',
  templateUrl: './exercise-configuration.component.html',
  styleUrls: ['./exercise-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseConfigurationComponent implements OnInit, OnChanges {
  @Input() public exercise: Exercise;
  @Output() public cancelClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() public confirmClicked: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  formGroup: FormGroup;
  exerciseTypes = Object.keys(ExerciseType).slice(Object.keys(ExerciseType).length / 2);

  ExerciseType = ExerciseType;


  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required]],
      description: [''],
      type: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (this.exercise) {
      this.updateFormGroup(this.exercise);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.exercise && changes.exercise.currentValue) {
      this.updateFormGroup(changes.exercise.currentValue);
    }
  }

  cancel() {
    this.cancelClicked.emit();
  }

  confirm() {
    this.confirmClicked.emit(this.formGroup.getRawValue());
  }

  private updateFormGroup(exercise: Exercise) {
    this.formGroup.setValue(exercise);
  }
}
