import { Component,Input,Output,EventEmitter } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html',
})
export class CardListPage {
  @Input() items:any;
  @Input() isAvatar:boolean = false;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}
  rowClick(doc){
    this.onClick.emit(doc);
  }

}
