import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService, @Inject(DOCUMENT) private document: Document
   ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang :'en');
   }

   translateLang(langSelect){
    this.translate.use(langSelect);
    this.changeStyleSheet(langSelect);
   }

   loadDynamicStyle(url,className){
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.className = className;
    style.className = 'dynamic-style';
    style.rel = 'stylesheet';
    style.href = `${url}`;
    head.appendChild(style);
}

removeDynamicStyle(name) {
  let elements = this.document.getElementsByClassName(name);
  while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
  }
  
}

changeStyleSheet(data){
  this.removeDynamicStyle('dynamic-style');
  if (data == 'ar') {                
       this.loadDynamicStyle("./assets/css/bootstrap-rtl.css", `${data}-style`);
       this.loadDynamicStyle("./assets/css/bootstrap-flipped.css", `${data}-style`);
      this.loadDynamicStyle("./assets/css/arabic.css", `${data}-style`);
  }
}
  ngOnInit() {
  }

}
