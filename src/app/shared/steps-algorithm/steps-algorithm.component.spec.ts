import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAlgorithmComponent } from './steps-algorithm.component';

describe('StepsAlgorithmComponent', () => {
  let component: StepsAlgorithmComponent;
  let fixture: ComponentFixture<StepsAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsAlgorithmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsAlgorithmComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
