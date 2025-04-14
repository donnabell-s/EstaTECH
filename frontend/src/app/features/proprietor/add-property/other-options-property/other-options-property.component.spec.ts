import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherOptionsPropertyComponent } from './other-options-property.component';

describe('OtherOptionsPropertyComponent', () => {
  let component: OtherOptionsPropertyComponent;
  let fixture: ComponentFixture<OtherOptionsPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherOptionsPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherOptionsPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
