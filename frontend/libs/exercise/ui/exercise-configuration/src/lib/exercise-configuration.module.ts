import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseConfigurationComponent } from './exercise-configuration/exercise-configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatRadioModule, FlexLayoutModule, MatButtonModule],
  exports: [ExerciseConfigurationComponent],
  declarations: [ExerciseConfigurationComponent]
})
export class ExerciseConfigurationModule {}
