import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { sysOptions } from '../../../providers/system.constants';

/**
 * Generated class for the CardSocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'card-social',
  templateUrl: 'card-social.html',
})
export class CardSocialPage {
  @Input() items: any;
  @Output() itemClick = new EventEmitter<any>();

  private translate: TranslateService;

  constructor(translate: TranslateService){
      this.translate = translate;
      this.translate.use(sysOptions.systemLanguage);
  }
  
  onClick(item) {
      // console.log("list", item);
      this.itemClick.emit(item);
  }

}
