import { Component } from '@angular/core';
import { ScheduledVisitCardComponent } from '../../../shared/scheduled-visit-card/scheduled-visit-card.component';

@Component({
  selector: 'app-view-scheduled-visits',
  imports: [ScheduledVisitCardComponent],
  templateUrl: './view-scheduled-visits.component.html',
  styleUrl: './view-scheduled-visits.component.css'
})
export class ViewScheduledVisitsComponent {

}
