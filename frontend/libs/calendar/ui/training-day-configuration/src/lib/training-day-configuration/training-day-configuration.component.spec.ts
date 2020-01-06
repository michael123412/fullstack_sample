import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDayConfigurationComponent } from './training-day-configuration.component';

describe('TrainingDayConfigurationComponent', () => {
  let component: TrainingDayConfigurationComponent;
  let fixture: ComponentFixture<TrainingDayConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDayConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDayConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
