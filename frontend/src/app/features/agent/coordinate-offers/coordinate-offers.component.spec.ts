import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateOffersComponent } from './coordinate-offers.component';

describe('CoordinateOffersComponent', () => {
  let component: CoordinateOffersComponent;
  let fixture: ComponentFixture<CoordinateOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinateOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
