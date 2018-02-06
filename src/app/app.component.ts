import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';

import { HomePage } from '../pages/home/home';
import { HttpService } from '../providers/httpapi/httpapi'; 
import { AlertService } from '../providers/alert-servce';
import { appId } from '../providers/system.constants';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    public http: HttpService, 
    public alert: AlertService,
    translate: TranslateService,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      http.getBaseURL("https://mobie-setup-ws.appspot.com/v1/getbaseurl?client=" + appId)
      // http.getBaseURL("http://localhost:3000/v1/getbaseurl?client=darafia")
        .then((url:any)=>{
          localStorage.setItem('baseURL', url);
          this.rootPage = HomePage;
        })
        .catch((err)=>{
          alert.showAlertAction("Setup", "Setup for this application is not completed")
            .then(()=>{
              platform.exitApp();
            });
        })
      translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar'){
          platform.setDir('rtl', true);
          platform.setDir('ltr', false);
        }
        else{
          platform.setDir('ltr', true);
          platform.setDir('rtl', false);
        }
      });	
        statusBar.styleDefault();
        splashScreen.hide();
      });
    }
}

