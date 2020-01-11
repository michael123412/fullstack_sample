import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { EventInput, Calendar } from '@fullcalendar/core';
import {
  TrainingDaysFacade,
  TrainingDay,
  Training
} from '@fitness-app/calendar/data/calendar-data';
import { Exercise, ExercisesFacade } from '@fitness-app/exercise/data';
import { MatDialog } from '@angular/material/dialog';
import { TrainingDayConfigurationDialogComponent } from '@fitness-app/calendar/ui/training-day-configuration';

@Component({
  selector: 'fitness-app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class CalendarViewComponent implements AfterViewInit {
  @ViewChild('calendar', { static: true, read: false })
  calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarEvents: EventInput[] = [];
  calendarApi: Calendar;

  trainingDays: TrainingDay[];
  exercises: Exercise[];

  constructor(
    private trainingDaysFacade: TrainingDaysFacade,
    private exercisesFacade: ExercisesFacade,
    private dialog: MatDialog
  ) {
    this.trainingDaysFacade.allTrainingDays$.subscribe(
      (trainingDays: TrainingDay[]) => {
        this.trainingDays = trainingDays;        
        if (this.exercises && this.exercises.length > 0) {
          this.updateTrainingEvents();
        }
      }
    );

    this.exercisesFacade.allExercises$.subscribe(
      (exercises: Exercise[]) => {
        this.exercises = exercises;
        if (this.trainingDays && this.trainingDays.length > 0) {
          this.updateTrainingEvents();
        }
      }
    );

    this.trainingDaysFacade.loadAll();
    this.exercisesFacade.loadAll();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateCalendarHeight(event.target.innerHeight);
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.calendarComponent.getApi();
    this.calendarApi.setOption('displayEventTime', false);
    this.updateCalendarHeight(window.innerHeight);
  }

  updateTrainingEvents() {
    const events: EventInput[] = [];
    this.trainingDays.forEach((trainingDay: TrainingDay) => {
      trainingDay.trainings.sort((n1,n2) => n1.order - n2.order).forEach((training: Training) => {
        const exercise = this.exercises.find((exercise: Exercise) => exercise.id === training.exerciseId);
        events.push({
          title: `${training.repetitions}x ${exercise.name}`,
          start: trainingDay.date,
          backgroundColor: training.done ? '#1a820d' : '#3e2daf',
          borderColor: '#ffffff99',
          displayEventTime: false
        });
      });
    });
    this.calendarEvents = events;
  }

  updateCalendarHeight(height: number) {
    this.calendarApi.setOption('height', height - 150);
    this.calendarApi.updateSize();
    // calendarApi.setOption('contentHeight', 700);
    // this.calendarApi.setOption('aspectRatio', 1.8);
    // calendarApi.render();
  }

  openTrainingDayDialog(date: Date) {
    let oldTrainingDay: TrainingDay = this.trainingDays.find((trainingDay: TrainingDay) => this.isSameDay(date, new Date(trainingDay.date)))
    let exists: boolean;
    if (oldTrainingDay) {
      exists = true;
    } else {
      oldTrainingDay = {
          id: '',
          date: date.toISOString(),
          trainings: []
      };
      exists = false;
    }


    const dialogRef = this.dialog.open(TrainingDayConfigurationDialogComponent, {
      minWidth: 400,
      data: oldTrainingDay
    });

    dialogRef.afterClosed().subscribe((result: { confirmed: boolean, trainingDay: TrainingDay}) => {
      if (!result || !result.confirmed) {
        return;
      }

      if (exists) {
        this.trainingDaysFacade.update(result.trainingDay);
      } else {
        this.trainingDaysFacade.create(result.trainingDay);
      }
    });
  }

  private isSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  handleDateClick(arg) {
    this.openTrainingDayDialog(arg.date);
    // open training day
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   })
    // }
  }

  handleEventClick(arg) { 
    this.openTrainingDayDialog(arg.event.start)
  }
}
