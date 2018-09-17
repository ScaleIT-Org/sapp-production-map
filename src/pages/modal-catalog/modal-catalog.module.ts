import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCatalogPage } from './modal-catalog';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ModalCatalogPage
  ],
  imports: [
    IonicPageModule.forChild(ModalCatalogPage),
    ComponentsModule
  ],
})
export class ModalCatalogPageModule {}
