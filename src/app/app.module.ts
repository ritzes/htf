import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AlertModule } from 'ngx-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
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

import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    IosAppDevelopmentComponent,
    AndroidAppDevelopmentComponent,
    DomainRegistrationComponent,
    LiveChatApplicationComponent,
    HostingServicesComponent,
    WebsiteDevelopmentComponent,
    PortfolioComponent,
    ContactComponent,
    PriceComponent,
    ReturnPolicyComponent,
    CustomerAgreementComponent,
    PrivacyPolicyComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule,
    NgxNavbarModule,
    AppRoutingModule,
    AnimateOnScrollModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader :{
        provide :TranslateLoader,
        useFactory :HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
   



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
