import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepFormIndicatorComponent } from './multi-step-form-indicator.component';

describe('MultiStepFormIndicatorComponent', () => {
  let component: MultiStepFormIndicatorComponent;
  let fixture: ComponentFixture<MultiStepFormIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiStepFormIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiStepFormIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
