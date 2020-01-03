import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioList;
  imageBasePath = environment.imageBasePath;

  constructor() { }

  ngOnInit() {
    this.portfolioList =[
      {
        link : "https://play.google.com/store/apps/details?id=com.htf.imasdar",
        class : 'imasdar',
        image : 'Portfolio/imasdar.png',
        title : 'IMASDAR',
        description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        link : "https://play.google.com/store/apps/details?id=app.htf.ahilStore&hl=en_IN",
        class : 'ahli_store',
        image : 'Portfolio/ahli_store.png',
        title : 'Ahli Store',
        description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
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

     
      ]

}
}
