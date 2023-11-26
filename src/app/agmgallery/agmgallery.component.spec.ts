import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGMGalleryComponent } from './agmgallery.component';

describe('AGMGalleryComponent', () => {
  let component: AGMGalleryComponent;
  let fixture: ComponentFixture<AGMGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGMGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AGMGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
