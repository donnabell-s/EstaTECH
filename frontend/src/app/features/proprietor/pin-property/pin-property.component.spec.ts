import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPropertyComponent } from './pin-property.component';

describe('PinPropertyComponent', () => {
  let component: PinPropertyComponent;
  let fixture: ComponentFixture<PinPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
