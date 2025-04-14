import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAgentComponent } from './rate-agent.component';

describe('RateAgentComponent', () => {
  let component: RateAgentComponent;
  let fixture: ComponentFixture<RateAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
