import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRecommenderComponent } from './agent-recommender.component';

describe('AgentRecommenderComponent', () => {
  let component: AgentRecommenderComponent;
  let fixture: ComponentFixture<AgentRecommenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentRecommenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
