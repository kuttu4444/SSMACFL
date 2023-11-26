import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspsaleComponent } from './mspsale.component';

describe('MspsaleComponent', () => {
  let component: MspsaleComponent;
  let fixture: ComponentFixture<MspsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
