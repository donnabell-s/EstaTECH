import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoAgentComponent } from './reco-agent.component';

describe('RecoAgentComponent', () => {
  let component: RecoAgentComponent;
  let fixture: ComponentFixture<RecoAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
