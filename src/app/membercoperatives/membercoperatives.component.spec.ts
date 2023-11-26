import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembercoperativesComponent } from './membercoperatives.component';

describe('MembercoperativesComponent', () => {
  let component: MembercoperativesComponent;
  let fixture: ComponentFixture<MembercoperativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembercoperativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembercoperativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
