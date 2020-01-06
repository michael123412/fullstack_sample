import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarDataModule } from '@fitness-app/calendar/data/calendar-data'
import { TrainingDayConfigurationModule } from '@fitness-app/calendar/ui/training-day-configuration';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CalendarViewComponent
      }
    ]),
    FullCalendarModule,
    CalendarDataModule,
    TrainingDayConfigurationModule
  ],
  declarations: [CalendarViewComponent]
})
export class CalendarViewModule {}
