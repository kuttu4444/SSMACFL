import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsaleComponent } from './poolsale.component';

describe('PoolsaleComponent', () => {
  let component: PoolsaleComponent;
  let fixture: ComponentFixture<PoolsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
