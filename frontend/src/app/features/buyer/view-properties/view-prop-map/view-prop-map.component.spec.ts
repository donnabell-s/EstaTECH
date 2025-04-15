import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropMapComponent } from './view-prop-map.component';

describe('ViewPropMapComponent', () => {
  let component: ViewPropMapComponent;
  let fixture: ComponentFixture<ViewPropMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
