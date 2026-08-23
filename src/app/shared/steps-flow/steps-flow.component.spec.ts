import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFlowComponent } from './steps-flow.component';

describe('StepsFlowComponent', () => {
  let component: StepsFlowComponent;
  let fixture: ComponentFixture<StepsFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsFlowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsFlowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
