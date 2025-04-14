import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOffersComponent } from './receive-offers.component';

describe('ReceiveOffersComponent', () => {
  let component: ReceiveOffersComponent;
  let fixture: ComponentFixture<ReceiveOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
