import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRatingSystemComponent } from './review-rating-system.component';

describe('ReviewRatingSystemComponent', () => {
  let component: ReviewRatingSystemComponent;
  let fixture: ComponentFixture<ReviewRatingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewRatingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewRatingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
