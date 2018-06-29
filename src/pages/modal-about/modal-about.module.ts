import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAboutPage } from './modal-about';

@NgModule({
  declarations: [
    ModalAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAboutPage),
  ],
})
export class ModalAboutPageModule {}
