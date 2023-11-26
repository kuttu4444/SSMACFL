import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueadditionComponent } from './valueaddition.component';

describe('ValueadditionComponent', () => {
  let component: ValueadditionComponent;
  let fixture: ComponentFixture<ValueadditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueadditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueadditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
