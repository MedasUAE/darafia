import { Component, EventEmitter, Output } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoctorModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-modal',
  templateUrl: 'doctor-modal.html',
})
export class DoctorModalPage {
  @Output() onClick = new EventEmitter<any>();

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  rowClick(doc){
    // console.log("doctor-modal", doc);
    // this.onClick.emit(doc);
    this.viewCtrl.dismiss(doc);
  }
}
