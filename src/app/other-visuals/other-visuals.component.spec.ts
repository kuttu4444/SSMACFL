import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherVisualsComponent } from './other-visuals.component';

describe('OtherVisualsComponent', () => {
  let component: OtherVisualsComponent;
  let fixture: ComponentFixture<OtherVisualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherVisualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherVisualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
