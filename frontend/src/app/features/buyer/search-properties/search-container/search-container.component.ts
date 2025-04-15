import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-container',
  imports: [],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {
  selectedValue: string;

  constructor(private router: Router) {
    this.selectedValue = 'any'; // Default selection
  }

  selectValue(value: string) {
    this.selectedValue = value; // Update the selected value
  }

  viewListing(){
    this.router.navigate(['buyer/view-properties/view-prop-search']);
  }
}
