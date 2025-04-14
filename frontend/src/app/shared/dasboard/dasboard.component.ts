import { Component } from '@angular/core';
import { ViewPropertiesComponent } from '../../features/buyer/view-properties/view-properties.component';
import { NavBarComponent } from '../nav/nav-bar/nav-bar.component';
import { SearchPropertiesComponent } from '../../features/buyer/search-properties/search-properties.component';
import { RecoPropComponent } from '../../recommender/reco-prop/reco-prop.component';
import { TestimoniesComponent } from '../../features/landing/testimonies/testimonies.component';
import { PartnersComponent } from '../../features/landing/partners/partners.component';
import { CoreFeaturesComponent } from '../../features/landing/core-features/core-features.component';

@Component({
  selector: 'app-dasboard',
  imports: [SearchPropertiesComponent, TestimoniesComponent, PartnersComponent, CoreFeaturesComponent],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export class DasboardComponent {

}
