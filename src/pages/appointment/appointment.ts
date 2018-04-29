import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as moment from 'moment';
import { AlertService } from '../../providers/alert-servce';
import { MastersProvider } from '../../providers/masters/masters';
import { ListModalPage } from '../components/list-modal/list-modal';
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

  departments:[any];
  doctors:any;
  department:any;
  name:string;
  mobile:string;
  when:string;
  doctor:string;
  startDate:string;
  endDate:string;
  headers: any;
  translate: TranslateService;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alert: AlertService,
    translate: TranslateService, 
    public masterService: MastersProvider,
    public modalCtrl: ModalController) {
    this.departments = this.navParams["data"];
    this.translate = translate;
    this.translate.use(sysOptions.systemLanguage);
    this.startDate = moment().format("YYYY-MM-DD");
    this.endDate = moment().add("days", 30).format("YYYY-MM-DD");
    this.getLanguageData();
  }

  doctorClick(){
    this.masterService.getDoctorList()
      .then((res:any)=>{
        let deptDoctor = this.filterDoctor(res);
        this.doctors = this.masterService.transformArrayList(deptDoctor);
        let heading = (sysOptions.systemLanguage == 'ar') ? this.headers.DOCTORS : "DOCTORS"
        
        let modal = this.modalCtrl.create(ListModalPage,{list:this.doctors, heading:heading, isAvatar:true});
        modal.present();
        modal.onDidDismiss(doc=>{
          if(doc) this.doctor = doc.heading;
        });
      })
      .catch(err=>{
        console.log(err);
      })
    // let modal = this.modalCtrl.create(DoctorModalPage);
    // modal.present()
    // modal.onDidDismiss(doc=>{
    //   if(doc) this.doctor = doc.heading;
    // });
  }

  filterDoctor(list){
    
    if(!this.department) return list;
    return list.filter(doc => {
      if(doc.department_id == this.department) return true;
    });
  }

  requestClick(){
    
    if(!this.doctor || !this.when) return;
    
    this.alert.showAlert("Thank you!",
      'Your request for appointment on <br><STRONG>' + this.when + '</STRONG> with <br><STRONG>'+ this.doctor +'</STRONG> is registered, We will contact you for confirmation.')
    this.navCtrl.goToRoot({});
  }

  private getLanguageData(){
    if(sysOptions.systemLanguage == 'en') return;
    this.masterService.getData()
      .then(res=>{
        this.headers = res;
        // console.log(res);
      })
  }
 }