import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformWideComponent } from './platform-wide.component';

describe('PlatformWideComponent', () => {
  let component: PlatformWideComponent;
  let fixture: ComponentFixture<PlatformWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformWideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
