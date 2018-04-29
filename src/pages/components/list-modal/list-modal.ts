import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-modal',
  templateUrl: 'list-modal.html',
})
export class ListModalPage {
  @Input() heading:string;
  @Input() isAvatar:boolean = false;
  @Output() itemClick = new EventEmitter<any>();
  list;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    if(navParams.data){
      this.list = navParams.data.list;
      this.heading = navParams.data.heading;
      this.isAvatar = navParams.data.isAvatar;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  rowClick(item){
    this.viewCtrl.dismiss(item);
  }

}
