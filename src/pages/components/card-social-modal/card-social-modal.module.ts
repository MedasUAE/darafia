import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardSocialModalPage } from './card-social-modal';

@NgModule({
  declarations: [
    CardSocialModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CardSocialModalPage),
  ],
})
export class CardSocialModalPageModule {}
