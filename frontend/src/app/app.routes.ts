import { Routes } from '@angular/router';
import { DasboardComponent } from './shared/dasboard/dasboard.component';
import { NavBarComponent } from './shared/nav/nav-bar/nav-bar.component';
import { ViewPropertiesComponent } from './features/buyer/view-properties/view-properties.component';
import { SearchPropertiesComponent } from './features/buyer/search-properties/search-properties.component';
import { ViewPropListComponent } from './features/buyer/view-properties/view-prop-list/view-prop-list.component';
import { SearchModuleComponent } from './features/buyer/search-properties/search-module/search-module.component';
import { ViewPropDetailsComponent } from './features/buyer/view-properties/view-prop-details/view-prop-details.component';
import { RecoPropComponent } from './recommender/reco-prop/reco-prop.component';
import { InternalMessagingComponent } from './features/platform-wide/internal-messaging/internal-messaging.component';
import { TestimoniesComponent } from './features/landing/testimonies/testimonies.component';
import { PartnersComponent } from './features/landing/partners/partners.component';
import { CoreFeaturesComponent } from './features/landing/core-features/core-features.component';

export const routes: Routes = [
    {path: 'dash', component: DasboardComponent},
    {path: 'navbar', component: NavBarComponent},
    {path: 'viewproperties', component: ViewPropertiesComponent},
    {path: 'searchproperties', component: ViewPropListComponent},
    {path: 'viewproplist', component: SearchPropertiesComponent},
    {path: 'searchmodule', component: SearchModuleComponent},
    {path: 'viewpropdetails', component: ViewPropDetailsComponent},
    {path: 'internalmsg', component: InternalMessagingComponent},
    {path: 'testimonies', component: TestimoniesComponent},
    {path: 'recoprop', component: RecoPropComponent},
    {path: 'partner', component: PartnersComponent},
    {path: 'corefeature', component: CoreFeaturesComponent},
    { path: '', redirectTo: '/dash', pathMatch: 'full' },
    { path: '**', redirectTo: '/dash' }
]
