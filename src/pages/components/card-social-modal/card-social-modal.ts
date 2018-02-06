import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardSocialModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'card-social-modal',
  templateUrl: 'card-social-modal.html',
})
export class CardSocialModalPage {

  @Input() heading:string;
  @Output() onClick = new EventEmitter<any>();
  list;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    if(navParams.data){
      this.list = navParams.data.list;
      this.heading = navParams.data.heading;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  rowClick(item){
    this.viewCtrl.dismiss(item);
  }

}
