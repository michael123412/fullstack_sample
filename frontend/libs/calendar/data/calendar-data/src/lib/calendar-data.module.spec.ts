import { async, TestBed } from '@angular/core/testing';
import { CalendarDataModule } from './calendar-data.module';

describe('CalendarDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CalendarDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CalendarDataModule).toBeDefined();
  });
});
