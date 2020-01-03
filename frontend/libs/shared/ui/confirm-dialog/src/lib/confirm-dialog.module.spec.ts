import { async, TestBed } from '@angular/core/testing';
import { ConfirmDialogModule } from './confirm-dialog.module';

describe('ConfirmDialogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmDialogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConfirmDialogModule).toBeDefined();
  });
});
