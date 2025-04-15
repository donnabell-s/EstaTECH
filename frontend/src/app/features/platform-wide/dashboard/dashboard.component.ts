import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewPropListComponent } from '../../buyer/view-properties/view-prop-list/view-prop-list.component';

@Component({
  selector: 'app-dashboard',
  imports: [ViewPropListComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  
}