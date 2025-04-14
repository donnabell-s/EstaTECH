import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScheduledVisitsComponent } from './view-scheduled-visits.component';

describe('ViewScheduledVisitsComponent', () => {
  let component: ViewScheduledVisitsComponent;
  let fixture: ComponentFixture<ViewScheduledVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewScheduledVisitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewScheduledVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
