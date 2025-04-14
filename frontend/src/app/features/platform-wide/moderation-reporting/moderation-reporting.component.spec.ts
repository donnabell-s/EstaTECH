import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationReportingComponent } from './moderation-reporting.component';

describe('ModerationReportingComponent', () => {
  let component: ModerationReportingComponent;
  let fixture: ComponentFixture<ModerationReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModerationReportingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerationReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
