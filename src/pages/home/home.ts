import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { AppointmentPage } from '../appointment/appointment';
import { ListModalPage } from '../components/list-modal/list-modal';
import { CardSocialModalPage } from '../components/card-social-modal/card-social-modal';
import { availableLanguages, sysOptions } from '../../providers/system.constants';

import { InsuranceProvider } from '../../providers/insurance/insurance'
import { MastersProvider } from '../../providers/masters/masters'
import { DoctorProvider } from '../../providers/doctor/doctor'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private translate: TranslateService;
  languages = availableLanguages;
  systemLanguage = sysOptions.systemLanguage;
  list;
  headers;
  
  constructor(public insranceService: InsuranceProvider,
    public navCtrl: NavController, 
    public masterService: MastersProvider,
    public doctorService: DoctorProvider,
    translate: TranslateService, 
    public modalCtrl: ModalController) {
    this.translate = translate;
    this.translate.use(sysOptions.systemLanguage);
    this.getLanguageData();
    
  }

  appointmentClick(){
    this.navCtrl.push(AppointmentPage);
  }

  private getLanguageData(){
    if(sysOptions.systemLanguage == 'en') return;
    this.masterService.getData()
      .then(res=>{
        this.headers = res;
        // console.log(res);
      })
  }

  doctorClick(){
    // this.list = this.doctorService.getDoctorList();
    // let modal = this.modalCtrl.create(ListModalPage,{list:this.list, heading:"Doctors", isAvatar:true});
    // modal.present()
    this.masterService.getDoctorList()
      .then((res:any)=>{
        this.list = this.masterService.transformArrayList(res);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.DOCTORS : "DOCTORS"
        
        let modal = this.modalCtrl.create(ListModalPage,{list:this.list, heading:heading, isAvatar:true});
        modal.present()
      })
      .catch(err=>{
        console.log(err);
      })
  }

  languageChange(lang){
    sysOptions.systemLanguage = lang;
    this.getLanguageData();
    this.systemLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getColor(lang){
    return (sysOptions.systemLanguage == lang) ? 'secondary' : 'light'; 

  }

  insuranceClick(){
    this.insranceService.getInsuranceList()
      .then((res:any)=>{
        this.list = this.insranceService.transformList(res);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.DOCTORS : "DOCTORS"
        
        let modal = this.modalCtrl.create(ListModalPage,{list:this.list, heading:heading, isAvatar:true});
        modal.present()
      })
      .catch(err=>{
        console.log(err);
      })
  }

  facilityClick(){
    // this.list = this.masterService.getFacilities();
    // let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:"Facilities"});
    // modal.present()
    this.masterService.getFacilities()
      .then((res:any)=>{
        this.list = this.masterService.transformArrayList(res);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.FACILITIES : "FACILITIES"
        
        let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:heading, isAvatar:true});
        modal.present()
      })
      .catch(err=>{
        console.log(err);
      })
  }

  pharmacyClick(){
    this.masterService.getPharmacyList()
      .then((res:any)=>{
        this.list = this.masterService.transformArrayList(res);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.PHARMACY : "PHARMACY"
        
        let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:heading, isAvatar:true});
        modal.present()
      })
      .catch(err=>{
        console.log(err);
      })
  }

  newsClick(){
    // this.list = this.masterService.getEventsList();
    // let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:"News & Events"});
    // modal.present()
    this.masterService.getEventsList()
      .then((res:any)=>{
        this.list = this.masterService.transformArrayList(res);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.NEWS_EVENTS : "NEWS & EVENTS"
        
        let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:heading, isAvatar:true});
        modal.present()
      })
      .catch(err=>{
        console.log(err);
      })
  }

  aboutUsClick(){
    // this.list = this.masterService.getAboutUs();
    // let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:"About us"});
    // modal.present()
    this.masterService.getAboutUs()
      .then((res:any)=>{
        this.list = this.masterService.transformArrayList(res);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.ABOUT_US : "ABOUT US"
        
        let modal = this.modalCtrl.create(CardSocialModalPage,{list:this.list, heading:heading, isAvatar:true});
        modal.present()
      })
      .catch(err=>{
        console.log(err);
      })
  }
}
