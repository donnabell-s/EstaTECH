import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropSearchComponent } from './view-prop-search.component';

describe('ViewPropSearchComponent', () => {
  let component: ViewPropSearchComponent;
  let fixture: ComponentFixture<ViewPropSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
