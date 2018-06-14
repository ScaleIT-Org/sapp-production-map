import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Nav, MenuController, Events} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AdministrationPage} from "../administration/administration";
import {LocalStorage} from "ngx-store";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "menu",
  segment: "pages"
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  isScrollingDisabled: boolean;
  pages: Array<{ title: string, component: any, icon: string }>;
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'user';

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public events: Events) {
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Admin', component: AdministrationPage, icon: 'construct'}
    ];
    this.isScrollingDisabled = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');


  }

  toggleScrolling() {
    if (!this.isScrollingDisabled) {
      this.isScrollingDisabled = true
    } else this.isScrollingDisabled = false;
    this.events.publish("sharedObject", this.isScrollingDisabled);
  }

  /*toggleScrolling() {
    if (this.isScrollingDisabled) {
      this.isScrollingDisabled = false
    } else this.isScrollingDisabled = true;
    this.nav.setRoot(this.pages[0].component, {
      data: this.isScrollingDisabled
    });
  }*/


  openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {
      data: this.isScrollingDisabled
    });

  }

}
