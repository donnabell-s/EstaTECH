import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-prop-details',
  imports: [],
  templateUrl: './view-prop-details.component.html',
  styleUrl: './view-prop-details.component.css'
})
export class ViewPropDetailsComponent {
  constructor(private router: Router) { }

  openInbox(){
    this.router.navigate(['platform-wide/internal-messaging']);
  }
}
