import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMarketingComponent } from './upload-marketing.component';

describe('UploadMarketingComponent', () => {
  let component: UploadMarketingComponent;
  let fixture: ComponentFixture<UploadMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
