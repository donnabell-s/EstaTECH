import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-documents',
  imports: [],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent {
  documentsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  get form() {
    return this.documentsForm;
  }

  private initializeForm(): void {
    this.documentsForm = this.fb.group({
      titleDeed: [null, Validators.required],
      taxDeclaration: ['', [Validators.required, Validators.email]],
      validId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.documentsForm.valid) {
      
      console.log('Documents uploaded successfully:', this.documentsForm.value);
      alert('Documents uploaded successfully!');
    } else {
      alert('Please ensure all required documents are uploaded and valid.');
    }
  }
}
