import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassesDetailsComponent } from './sunglasses-details.component';

describe('SunglassesDetailsComponent', () => {
  let component: SunglassesDetailsComponent;
  let fixture: ComponentFixture<SunglassesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunglassesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunglassesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
