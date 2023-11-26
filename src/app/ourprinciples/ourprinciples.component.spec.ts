import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurprinciplesComponent } from './ourprinciples.component';

describe('OurprinciplesComponent', () => {
  let component: OurprinciplesComponent;
  let fixture: ComponentFixture<OurprinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurprinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurprinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
