import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateLoader, TranslateStaticLoader, TranslateModule } from 'ng2-translate/ng2-translate'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListAvatarPage } from '../pages/components/list-avatar/list';
import { ListModalPage } from '../pages/components/list-modal/list-modal';
import { CardSocialPage } from '../pages/components/card-social/card-social';
import { CardSocialModalPage } from '../pages/components/card-social-modal/card-social-modal';
import { CardListPage } from '../pages/components/card-list/card-list';
import { DoctorsPage } from '../pages/doctors/doctors';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DoctorModalPage } from '../pages/doctor-modal/doctor-modal';
import { ListPage } from '../pages/components/list/list';

import { DoctorProvider } from '../providers/doctor/doctor';
import { InsuranceProvider } from '../providers/insurance/insurance';
import { MastersProvider } from '../providers/masters/masters';
import { HttpService } from '../providers/httpapi/httpapi';
import { Network } from '@ionic-native/network';
import { AlertService } from '../providers/alert-servce';


export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/lang', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListAvatarPage,
    DoctorsPage,
    AppointmentPage,
    DoctorModalPage,
    CardListPage,
    ListModalPage,
    CardSocialPage,
    CardSocialModalPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DoctorsPage,
    AppointmentPage,
    DoctorModalPage,
    CardListPage,
    ListModalPage,
    CardSocialPage,
    CardSocialModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DoctorProvider,
    InsuranceProvider,
    MastersProvider,
    HttpService,
    Network,
    AlertService
  ]
})
export class AppModule {}
