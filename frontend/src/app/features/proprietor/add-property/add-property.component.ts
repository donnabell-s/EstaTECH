import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Removed unused MultiStepFormIndicatorComponent import
import { UploadPropertyComponent } from './upload-property/upload-property.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { OtherOptionsPropertyComponent } from './other-options-property/other-options-property.component';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild(UploadPropertyComponent, { static: false }) uploadPropertyComponent!: UploadPropertyComponent;
  @ViewChild(UploadMediaComponent, { static: false }) uploadMediaComponent!: UploadMediaComponent;
  @ViewChild(UploadDocumentsComponent, { static: false }) uploadDocumentsComponent!: UploadDocumentsComponent;
  @ViewChild(OtherOptionsPropertyComponent, { static: false }) otherOptionsPropertyComponent!: OtherOptionsPropertyComponent;

  addPropertyForm!: FormGroup;
  totalSteps: number = 6;
  currentStep: number = 2; // Starts at step 2
  completedSteps: number[] = [1]; // Step 1 is already completed

  constructor(private router: Router) {
    this.initializeForm();
  }

  ngOnInit(): void {
    console.log('Current Step:', this.currentStep);
  }

  isCurrentFormValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return true;
      case 2:
        // console.log('Upload Property Form Valid:', this.uploadPropertyComponent?.form?.valid);
        return this.uploadPropertyComponent?.form?.valid || false;
      case 3:
        return this.uploadMediaComponent?.form?.valid || false;
      case 4:
        return this.uploadDocumentsComponent?.form?.valid || false;
      case 5:
        return this.otherOptionsPropertyComponent?.form?.valid || false;
      default:
        return false;
    }
  }

  private initializeForm(): void {
    // this.addPropertyForm = this.fb.group({
    //   propertyDetails: this.fb.group({
    //     propertyTitle: ['', Validators.required],
    //     propertyType: ['', Validators.required],
    //     listingType: ['', Validators.required],
    //     price: [null, [Validators.required, Validators.min(0)]],
    //     bedrooms: [null, [Validators.required, Validators.min(0)]],
    //     bathrooms: [null, [Validators.required, Validators.min(0)]],
    //     floorArea: [null, [Validators.required, Validators.min(0)]],
    //     amenities: this.fb.group({
    //       wifi: [false]
    //     }),
    //     condition: ['', Validators.required],
    //     description: ['', Validators.required],
    //     address: ['', Validators.required],
    //     region: ['', Validators.required],
    //     province: ['', Validators.required],
    //     municipality: ['', Validators.required]
    //   }),
    //   media: this.fb.group({
    //     photos: [null, [Validators.required, this.minFilesValidator(3)]],
    //     video: [null, Validators.required]
    //   }),
    //   documents: this.fb.group({
    //     titleDeed: [null, Validators.required],
    //     taxDeclaration: ['', [Validators.required, Validators.email]],
    //     validId: [null, Validators.required]
    //   }),
    //   otherOptions: this.fb.group({
    //     preferredAgent: this.fb.array([], Validators.required),
    //     availability: [null, Validators.required]
    //   })
    // });
  }

  onNextStep(): void {
    switch(this.currentStep) {
      case 1:
        this.currentStep++;
        this.router.navigate(['/proprietor/profile-setup']);
        break;
      case 2:
        this.currentStep++;
        this.router.navigate(['/proprietor/add-property/upload-property']);
        break;
      case 3:
        this.currentStep++;
        this.router.navigate(['/proprietor/add-property/upload-media']);
        break;
      case 4:
        this.currentStep++;
        this.router.navigate(['/proprietor/add-property/upload-documents']);
        break;
      case 5:
        this.currentStep++;
        this.router.navigate(['/proprietor/add-property/other-options']);
        break;
    } 
  }

  onPreviousStep(): void {
    switch (this.currentStep) {
      case 2:
        this.currentStep--;
        this.router.navigate(['/proprietor/profile-setup']);
        break;
      case 3:
        this.currentStep--;
        this.router.navigate(['/proprietor/add-property/upload-property']);
        break;
      case 4:
        this.currentStep--;
        this.router.navigate(['/proprietor/add-property/upload-media']);
        break;
      case 5:
        this.currentStep--;
        this.router.navigate(['/proprietor/add-property/upload-documents']);
        break;
    }
  }

  onSubmit(): void {
    if (this.otherOptionsPropertyComponent.form.valid) {
      console.log('Form submitted successfully:', this.addPropertyForm.value);
      this.router.navigate(['/success']);
    }
  }
}