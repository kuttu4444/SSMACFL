import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederationprofileComponent } from './federationprofile.component';

describe('FederationprofileComponent', () => {
  let component: FederationprofileComponent;
  let fixture: ComponentFixture<FederationprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederationprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FederationprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
