import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExposuresComponent } from './training-exposures.component';

describe('TrainingExposuresComponent', () => {
  let component: TrainingExposuresComponent;
  let fixture: ComponentFixture<TrainingExposuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingExposuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingExposuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
