import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseConfigurationComponent } from './exercise-configuration.component';

describe('ExerciseConfigurationComponent', () => {
  let component: ExerciseConfigurationComponent;
  let fixture: ComponentFixture<ExerciseConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
