import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeEducationComponent } from './cooperative-education.component';

describe('CooperativeEducationComponent', () => {
  let component: CooperativeEducationComponent;
  let fixture: ComponentFixture<CooperativeEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
