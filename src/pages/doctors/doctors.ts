import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorProvider } from '../../providers/doctor/doctor'

/**
 * Generated class for the DoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
  providers: [DoctorProvider]
})
export class DoctorsPage {
  @Output() selectDoct = new EventEmitter<any>();
  doctors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public docProvider: DoctorProvider) {
    this.doctors = this.docProvider.getDoctorList();
  }

  rowClick(doc){
    // console.log("doctor-list", doc);
    this.selectDoct.emit(doc);
  }
}
