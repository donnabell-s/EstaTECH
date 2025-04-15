import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  isSidebarOpen: boolean = true;

  onSidebarToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}