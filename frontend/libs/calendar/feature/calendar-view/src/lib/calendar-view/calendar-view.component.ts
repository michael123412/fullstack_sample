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
import { Observable } from 'rxjs';
import { Exercise, ExercisesFacade } from '@fitness-app/exercise/data';

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
    private exercisesFacade: ExercisesFacade
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
      trainingDay.trainings.forEach((training: Training) => {
        const exercise = this.exercises.find((exercise: Exercise) => exercise.id === training.exerciseId);
         
        console.log(this.exercises);
        console.log(training.exerciseId);
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

  handleDateClick(arg) {
    // open training day
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   })
    // }
  }
}
