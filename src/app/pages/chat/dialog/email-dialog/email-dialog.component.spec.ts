import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDialogComponent } from './email-dialog.component';

describe('EmailDialogComponent', () => {
  let component: EmailDialogComponent;
  let fixture: ComponentFixture<EmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
