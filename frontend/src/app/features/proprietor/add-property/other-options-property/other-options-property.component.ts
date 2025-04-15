import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import * as moment from 'moment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-options-property',
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  templateUrl: './other-options-property.component.html',
  styleUrl: './other-options-property.component.css',
  encapsulation:ViewEncapsulation.None,
})
export class OtherOptionsPropertyComponent {
  dates: moment.Moment[] = []
  propertyForm!: FormGroup;
  agents = [
    { id: 1, image: 'agent1.jpg' },
    { id: 2, image: 'agent2.jpg' },
    { id: 3, image: 'agent3.jpg' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  get form() {
    return this.propertyForm;
  }

  private initializeForm(): void {
    this.propertyForm = this.fb.group({
      preferredAgent: this.fb.array([], Validators.required),
      availability: [null, Validators.required]
    });
  }

  isSelected: MatCalendarCellClassFunction<any> = (date: moment.Moment) => {
    return this.dates.find(x => x.isSame(date)) ? 'selected' : '';
  };
  
  select(event: any, calendar: any) {
    const date: moment.Moment = event as moment.Moment

    const index = this.dates.findIndex(x => x.isSame(date));
    if (index < 0) this.dates.push(date);
    else this.dates.splice(index, 1);

    calendar.updateTodaysDate();
  }

  onAgentChange(agentId: number, isChecked: boolean): void {
    const preferredAgentArray = this.propertyForm.get('preferredAgent') as FormArray;
    if (isChecked) {
      preferredAgentArray.push(this.fb.control(agentId));
    } else {
      const index = preferredAgentArray.controls.findIndex(x => x.value === agentId);
      preferredAgentArray.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      console.log('Form submitted successfully:', this.propertyForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please ensure all required fields are filled out.');
    }
  }
}