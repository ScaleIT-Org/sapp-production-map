import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrationPage } from './administration';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdministrationPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministrationPage),
    ComponentsModule
  ],
})
export class AdministrationPageModule {}
