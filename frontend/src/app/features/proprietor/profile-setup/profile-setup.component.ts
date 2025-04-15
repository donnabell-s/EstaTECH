import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MultiStepFormIndicatorComponent } from "../../../shared/multi-step-form-indicator/multi-step-form-indicator.component";

@Component({
  selector: 'app-profile-setup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.css']
})
export class ProfileSetupComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      fullName: ['Donna Elizabeth Sembrano', [Validators.required, Validators.minLength(3)]],
      email: ['donna@usjr.edu.ph', [Validators.required, Validators.email]],
      mobileNumber: ['0912345678', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      governmentId: [null]
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form Submitted:', this.profileForm.value);
      this.router.navigate(['/proprietor/add-property/upload-property']);
    } else {
      console.log('Form is invalid');
    }
  }
}