import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MultiStepFormIndicatorComponent } from "../../../shared/multi-step-form-indicator/multi-step-form-indicator.component";

@Component({
  selector: 'app-profile-setup',
  imports: [CommonModule, ReactiveFormsModule, MultiStepFormIndicatorComponent],
  templateUrl: './profile-setup.component.html',
  styleUrl: './profile-setup.component.css'
})
export class ProfileSetupComponent {
  profileForm: FormGroup;
  flows: number = 1;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      governmentId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form Submitted:', this.profileForm.value);
      this.flows = 5;
    } else {
      console.log('Form is invalid');
    }
  }
}