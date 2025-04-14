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


const routes: Routes = [
  {
    path: 'proprietor',
    loadComponent: () => import('./features/proprietor/proprietor.component').then(m => m.ProprietorComponent),
    children: [
      {
        path: 'profile-setup',
        loadComponent: () => import('./features/proprietor/profile-setup/profile-setup.component').then(m => m.ProfileSetupComponent)
      },
      {
        path: 'upload-property',
        loadComponent: () => import('./features/proprietor/add-property/upload-property/upload-property.component').then(m => m.UploadPropertyComponent)
      },
      {
        path: 'upload-media',
        loadComponent: () => import('./features/proprietor/add-property/upload-media/upload-media.component').then(m => m.UploadMediaComponent)
      },
      {
        path: 'connect-agent',
        loadComponent: () => import('./features/proprietor/connect-agent/connect-agent.component').then(m => m.ConnectAgentComponent)
      },
      {
        path: 'receive-offers',
        loadComponent: () => import('./features/proprietor/receive-offers/receive-offers.component').then(m => m.ReceiveOffersComponent)
      },
      { 
        path: 'view-scheduled-visits',
        loadComponent: () => import('./features/proprietor/view-scheduled-visits/view-scheduled-visits.component').then(m => m.ViewScheduledVisitsComponent)
      },
      {
        path: 'other-options',
        loadComponent: () => import('./features/proprietor/add-property/other-options-property/other-options-property.component').then(m => m.OtherOptionsPropertyComponent)
      }
    ]
  },
  {
    path: 'agent',
    loadComponent: () => import('./features/agent/agent.component').then(m => m.AgentComponent),
    children: [
      {
        path: 'verify-property',
        loadComponent: () => import('./features/agent/verify-property/verify-property.component').then(m => m.VerifyPropertyComponent)
      },
      {
        path: 'manage-leads',
        loadComponent: () => import('./features/agent/manage-leads/manage-leads.component').then(m => m.ManageLeadsComponent)
      },
      {
        path: 'upload-marketing',
        loadComponent: () => import('./features/agent/upload-marketing/upload-marketing.component').then(m => m.UploadMarketingComponent)
      },
      {
        path: 'coordinate-offers',
        loadComponent: () => import('./features/agent/coordinate-offers/coordinate-offers.component').then(m => m.CoordinateOffersComponent)
      },
      {
        path: 'view-performance',
        loadComponent: () => import('./features/agent/view-performance/view-performance.component').then(m => m.ViewPerformanceComponent)
      }
    ]
  },
  {
    path: 'buyer',
    loadComponent: () => import('./features/buyer/buyer.component').then(m => m.BuyerComponent),
    children: [
      {
        path: 'search-properties',
        loadComponent: () => import('./features/buyer/search-properties/search-properties.component').then(m => m.SearchPropertiesComponent)
      },
      {
        path: 'view-properties',
        loadComponent: () => import('./features/buyer/view-properties/view-properties.component').then(m => m.ViewPropertiesComponent)
      },
      {
        path: 'submit-offer',
        loadComponent: () => import('./features/buyer/submit-offer/submit-offer.component').then(m => m.SubmitOfferComponent)
      },
      {
        path: 'schedule-visit',
        loadComponent: () => import('./features/buyer/schedule-visit/schedule-visit.component').then(m => m.ScheduleVisitComponent)
      },
      {
        path: 'rate-agent',
        loadComponent: () => import('./features/buyer/rate-agent/rate-agent.component').then(m => m.RateAgentComponent)
      },
      {
        path: 'upload-mortgage',
        loadComponent: () => import('./features/buyer/upload-mortgage/upload-mortgage.component').then(m => m.UploadMortgageComponent)
      }
    ]
  },
  {
    path: 'superadmin',
    loadComponent: () => import('./features/superadmin/superadmin.component').then(m => m.SuperadminComponent),
    children: [
      {
        path: 'assign-agent',
        loadComponent: () => import('./features/superadmin/assign-agent/assign-agent.component').then(m => m.AssignAgentComponent)
      },
      {
        path: 'monitor-activity',
        loadComponent: () => import('./features/superadmin/monitor-activity/monitor-activity.component').then(m => m.MonitorActivityComponent)
      },
      {
        path: 'moderate-reviews',
        loadComponent: () => import('./features/superadmin/moderate-reviews/moderate-reviews.component').then(m => m.ModerateReviewsComponent)
      },
      {
        path: 'manage-fairness',
        loadComponent: () => import('./features/superadmin/manage-fairness/manage-fairness.component').then(m => m.ManageFairnessComponent)
      },
      {
        path: 'deactivate-accounts',
        loadComponent: () => import('./features/superadmin/deactivate-accounts/deactivate-accounts.component').then(m => m.DeactivateAccountsComponent)
      }
    ]
  },
  {
    path: 'platform-wide',
    loadComponent: () => import('./features/platform-wide/platform-wide.component').then(m => m.PlatformWideComponent),
    children: [
      {
        path: 'oauth-registration',
        loadComponent: () => import('./features/platform-wide/oauth-registration/oauth-registration.component').then(m => m.OauthRegistrationComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/platform-wide/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'internal-messaging',
        loadComponent: () => import('./features/platform-wide/internal-messaging/internal-messaging.component').then(m => m.InternalMessagingComponent)
      },
      {
        path: 'review-rating-system',
        loadComponent: () => import('./features/platform-wide/review-rating-system/review-rating-system.component').then(m => m.ReviewRatingSystemComponent)
      },
      {
        path: 'agent-recommender',
        loadComponent: () => import('./features/platform-wide/agent-recommender/agent-recommender.component').then(m => m.AgentRecommenderComponent)
      },
      {
        path: 'moderation-reporting',
        loadComponent: () => import('./features/platform-wide/moderation-reporting/moderation-reporting.component').then(m => m.ModerationReportingComponent)
      }
    ]
  },
  { path: '', redirectTo: '/buyer', pathMatch: 'full' },
  { path: '**', redirectTo: '/buyer' }
];

export default routes;