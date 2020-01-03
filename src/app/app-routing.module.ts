import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IosAppDevelopmentComponent } from './services/ios-app-development/ios-app-development.component';
import { AndroidAppDevelopmentComponent } from './services/android-app-development/android-app-development.component';
import { DomainRegistrationComponent } from './services/domain-registration/domain-registration.component';
import { LiveChatApplicationComponent } from './services/live-chat-application/live-chat-application.component';
import { HostingServicesComponent } from './services/hosting-services/hosting-services.component';
import { WebsiteDevelopmentComponent } from './services/website-development/website-development.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { CustomerAgreementComponent } from './customer-agreement/customer-agreement.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'services/ios-app-development',
    component:IosAppDevelopmentComponent
  },
  {
    path:'services/android-app-development',
    component:AndroidAppDevelopmentComponent
  },
 
  {
    path:'services/domain-registration',
    component:DomainRegistrationComponent
  },
  {
    path:'services/live-chat-application',
    component:LiveChatApplicationComponent
  },
  {
    path:'services/hosting-services',
    component:HostingServicesComponent
  },
  {
    path:'services/website-development',
    component:WebsiteDevelopmentComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'price',
    component:PriceComponent
  },
  {
    path:'return-policy',
    component:ReturnPolicyComponent
  },
  {
    path:'customer-agreement',
    component:CustomerAgreementComponent
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
