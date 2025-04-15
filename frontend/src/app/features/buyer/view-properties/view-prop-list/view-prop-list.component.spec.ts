import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropListComponent } from './view-prop-list.component';

describe('ViewPropListComponent', () => {
  let component: ViewPropListComponent;
  let fixture: ComponentFixture<ViewPropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
