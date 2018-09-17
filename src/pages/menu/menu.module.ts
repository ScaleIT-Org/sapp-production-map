import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import {HomePageModule} from "../home/home.module";
import {AdministrationPageModule} from "../administration/administration.module";

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    HomePageModule,
    AdministrationPageModule,
  ],
})
export class MenuPageModule {}
