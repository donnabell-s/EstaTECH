import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFairnessComponent } from './manage-fairness.component';

describe('ManageFairnessComponent', () => {
  let component: ManageFairnessComponent;
  let fixture: ComponentFixture<ManageFairnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFairnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFairnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
