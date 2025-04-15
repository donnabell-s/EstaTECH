import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-media',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './upload-media.component.html',
  styleUrl: './upload-media.component.css'
})
export class UploadMediaComponent implements OnInit {
  mediaUploadForm!: FormGroup;
  step: number = 3; // Step 3 in the multi-step form
  image1 = "/prop1.jpg"
  image2 = "/prop2.jpg"
  image3 = "/prop3.jpg"

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  get form() {
    return this.mediaUploadForm;
  }

  private initializeForm(): void {
    this.mediaUploadForm = this.fb.group({
      photos: [null, [Validators.required, this.minFilesValidator(3)]],
      video: [null, Validators.required]
    });
  }

  // Custom validator to ensure a minimum number of files are uploaded
  private minFilesValidator(min: number) {
    return (control: any) => {
      const files = control?.value?.files || [];
      return files.length >= min ? null : { minFiles: true };
    };
  }

  onSubmit(): void {
    if (this.mediaUploadForm.valid) {
      console.log('Media uploaded successfully:', this.mediaUploadForm.value);
      alert('Media uploaded successfully!');
      // Navigate to the next step
      this.router.navigate(['/proprietor/add-property/upload-documents']);
    } else {
      alert('Please ensure all required media files are uploaded.');
    }
  }
}