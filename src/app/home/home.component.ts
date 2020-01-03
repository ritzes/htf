import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 1
  servicesList;
  portfolioList;
  recentClient;
  serviceTitleKey = 'en';
  homeServiceBox;
  imageBasePath = environment.imageBasePath;
  constructor(public translate: TranslateService) {
    translate.onLangChange.subscribe(lang => {
      this.serviceTitleKey = lang.lang;
      // console.log(lang);
    })
   }

  ngOnInit() {
    this.homeServiceBox = [
    {
      serviceImages : 'android-app.png'
    },
    {
      serviceImages : 'iOS-app.png'
    },
    {
      serviceImages : 'web_development.png'
    },
    {
      serviceImages : 'hosting.png'
    },
    {
      serviceImages : 'domain-register.png'
    },
    {
      serviceImages : 'live_chat.png'
    },
    ]
    this.portfolioList =[
    {
      image : 'Portfolio/ahli_store.png',
      title : 'Ahli Store',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {  
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'alwasta',
      image : 'Portfolio/alwasta.png',
      title : 'Alwsata Real Estate Co',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=app.wm.chinatravel&hl=en_IN",
      class : 'dlil',
      image : 'Portfolio/dlil_china.png',
      title : 'Dlil China',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'evi_ride',
      image : 'Portfolio/evi.png',
      title : 'EVI Ride',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'truck_app',
      image : 'Portfolio/truck_app.png',
      title : 'Truck App',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.learnchinese&hl=en_IN",
      class : 'learn_chinease',
      image : 'Portfolio/learn_chinese.png',
      title : 'Learn Chinese',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'kilowat',
      image : 'Portfolio/kilowat.png',
      title : 'Kilowat',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'logistiom',
      image : 'Portfolio/logistiom.png',
      title : 'Logistiom',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'imasdar',
      image : 'Portfolio/imasdar.png',
      title : 'IMASDAR',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'tamweelk',
      image : 'Portfolio/tamweelk.png',
      title : 'Tamweelk',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
      class : 'medicolase',
      image : 'Portfolio/medicolase.png',
      title : 'Medicolase',
      description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    }
   
    ],
    this.servicesList = [
      {
        image: 'domain_regi.png',
        title_en: 'Domain Registration',
        title_ar:"حجز النطاقات"
      },
      {
        image: 'server.png',
        title_en: 'Hosting Services',
        title_ar:"الإستضافة و السيرفرات"
      },
      {
        image: 'web_dev.png',
        title_en: 'Website development',
        title_ar:"تطبيقات الويب"
      },
      {
        image: 'android_mob.png',
        title_en: 'Android application',
        title_ar:"تطبيقات الأندرويد"
      },
      {
        image: 'ios_application.png',
        title_en: 'ios app application',
        title_ar:"تطبيقات أبل"
      },
      {
        image: 'live_chat_app.png',
        title_en: 'Live chat application',
        title_ar:"تطبيق محادثة"
      }

    ],
    this.recentClient = [
      
     
      {
        clientLogo : 'eyenak_logo.jpg' 
      },
      {
        clientLogo : 'kilowat_logo.jpg' 
      },
      {
        clientLogo : 'logistiom_logo.jpg' 
      },
      {
        clientLogo : 'evi_logo.jpg' 
      },
      {
        clientLogo : 'meducilase_logo.jpg' 
      },
      {
        clientLogo : 'china_guide_logo.jpg' 
      },
      {
        clientLogo : 'learn-chines-logo.jpg' 
      },
      {
        clientLogo : 'drdsh_logo.svg' 
      },
      {
        clientLogo : 'tamweely_logo.jpg' 
      }
    ]
  }

}
