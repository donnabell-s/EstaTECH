import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAgentComponent } from './connect-agent.component';

describe('ConnectAgentComponent', () => {
  let component: ConnectAgentComponent;
  let fixture: ComponentFixture<ConnectAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
