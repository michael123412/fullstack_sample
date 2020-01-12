import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDayConfigurationComponent } from './training-day-configuration/training-day-configuration.component';
import { TrainingDayConfigurationDialogComponent } from './training-day-configuration-dialog/training-day-configuration-dialog.component';
import { CalendarDataModule } from '@fitness-app/calendar/data/calendar-data';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CalendarDataModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    DragDropModule,
    FlexLayoutModule
  ],
  exports: [
    TrainingDayConfigurationComponent,
    TrainingDayConfigurationDialogComponent
  ],
  declarations: [
    TrainingDayConfigurationComponent,
    TrainingDayConfigurationDialogComponent
  ],
  entryComponents: [TrainingDayConfigurationDialogComponent]
})
export class TrainingDayConfigurationModule {}
