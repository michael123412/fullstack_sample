import { async, TestBed } from '@angular/core/testing';
import { CalendarViewModule } from './calendar-view.module';

describe('CalendarViewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarViewModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CalendarViewModule).toBeDefined();
  });
});
