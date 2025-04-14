import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledVisitCardComponent } from './scheduled-visit-card.component';

describe('ScheduledVisitCardComponent', () => {
  let component: ScheduledVisitCardComponent;
  let fixture: ComponentFixture<ScheduledVisitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledVisitCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledVisitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
