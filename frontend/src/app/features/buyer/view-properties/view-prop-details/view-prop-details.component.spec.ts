import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropDetailsComponent } from './view-prop-details.component';

describe('ViewPropDetailsComponent', () => {
  let component: ViewPropDetailsComponent;
  let fixture: ComponentFixture<ViewPropDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
