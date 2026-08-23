import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlgorithmstepDialogComponent } from './home-algorithmstep-dialog.component';

describe('HomeAlgorithmstepDialogComponent', () => {
  let component: HomeAlgorithmstepDialogComponent;
  let fixture: ComponentFixture<HomeAlgorithmstepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAlgorithmstepDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAlgorithmstepDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
