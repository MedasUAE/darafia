import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DoctorModalPage } from '../doctor-modal/doctor-modal';
import * as moment from 'moment';
import { AlertService } from '../../providers/alert-servce'
import { TranslateService } from 'ng2-translate';
import { sysOptions } from '../../providers/system.constants';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  department:any;
  name:string;
  mobile:string;
  when:string;
  doctor:string;
  startDate:string;
  endDate:string;
  translate: TranslateService;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alert: AlertService,
    translate: TranslateService, 
    public modalCtrl: ModalController) {
    this.translate = translate;
    console.log(sysOptions.systemLanguage);
    this.translate.use(sysOptions.systemLanguage);
    this.startDate = moment().format("YYYY-MM-DD");
    this.endDate = moment().add("days", 30).format("YYYY-MM-DD");
  }

  doctorClick(){
    let modal = this.modalCtrl.create(DoctorModalPage);
    modal.present()
    modal.onDidDismiss(doc=>{
      if(doc) this.doctor = doc.heading;
    });
  }

  requestClick(){
    if(!this.doctor || !this.when) return;
    
    this.alert.showAlert("Thank you!",
      'Your request for appointment on <br><STRONG>' + this.when + '</STRONG> with <br><STRONG>'+ this.doctor +'</STRONG> is registered, We will contact you for confirmation.')
    this.navCtrl.goToRoot({});
  }
 }