import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMortgageComponent } from './upload-mortgage.component';

describe('UploadMortgageComponent', () => {
  let component: UploadMortgageComponent;
  let fixture: ComponentFixture<UploadMortgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadMortgageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
