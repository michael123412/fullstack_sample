import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDayConfigurationDialogComponent } from './training-day-configuration-dialog.component';

describe('TrainingDayConfigurationDialogComponent', () => {
  let component: TrainingDayConfigurationDialogComponent;
  let fixture: ComponentFixture<TrainingDayConfigurationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDayConfigurationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDayConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
