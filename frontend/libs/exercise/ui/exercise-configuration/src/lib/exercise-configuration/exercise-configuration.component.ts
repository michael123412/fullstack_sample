import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Exercise } from '@fitness-app/exercise/data';

@Component({
  selector: 'fitness-app-exercise-configuration',
  templateUrl: './exercise-configuration.component.html',
  styleUrls: ['./exercise-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseConfigurationComponent implements OnInit {
  @Input() public exercise: Exercise;

  constructor() { }

  ngOnInit() {
  }

}
