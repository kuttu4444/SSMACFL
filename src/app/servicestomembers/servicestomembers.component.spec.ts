import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestomembersComponent } from './servicestomembers.component';

describe('ServicestomembersComponent', () => {
  let component: ServicestomembersComponent;
  let fixture: ComponentFixture<ServicestomembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicestomembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicestomembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
