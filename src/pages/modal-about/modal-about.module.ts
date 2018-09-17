import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAboutPage } from './modal-about';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ModalAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAboutPage),
    ComponentsModule
  ],
})
export class ModalAboutPageModule {}
