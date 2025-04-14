import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateAccountsComponent } from './deactivate-accounts.component';

describe('DeactivateAccountsComponent', () => {
  let component: DeactivateAccountsComponent;
  let fixture: ComponentFixture<DeactivateAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeactivateAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivateAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
