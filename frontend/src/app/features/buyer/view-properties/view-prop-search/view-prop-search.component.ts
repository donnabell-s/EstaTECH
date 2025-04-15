import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { ViewPropMapComponent } from '../view-prop-map/view-prop-map.component';
import { ViewPropListComponent } from '../view-prop-list/view-prop-list.component';

@Component({
  selector: 'app-view-prop-search',
  imports: [RouterModule, NgClass, ViewPropMapComponent, ViewPropListComponent, NgIf],
  templateUrl: './view-prop-search.component.html',
  styleUrl: './view-prop-search.component.css'
})
export class ViewPropSearchComponent {
  isMapView: boolean = false; // Set to false to show the list view by default

  toggleView() {
    this.isMapView = !this.isMapView; // Toggle the view state
  }
}
