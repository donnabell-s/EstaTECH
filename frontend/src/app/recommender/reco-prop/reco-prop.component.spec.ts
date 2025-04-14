import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoPropComponent } from './reco-prop.component';

describe('RecoPropComponent', () => {
  let component: RecoPropComponent;
  let fixture: ComponentFixture<RecoPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoPropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
