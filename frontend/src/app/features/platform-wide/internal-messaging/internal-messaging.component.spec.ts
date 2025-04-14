import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalMessagingComponent } from './internal-messaging.component';

describe('InternalMessagingComponent', () => {
  let component: InternalMessagingComponent;
  let fixture: ComponentFixture<InternalMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalMessagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
