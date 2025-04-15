import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPropertiesComponent } from './assigned-properties.component';

describe('AssignedPropertiesComponent', () => {
  let component: AssignedPropertiesComponent;
  let fixture: ComponentFixture<AssignedPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
