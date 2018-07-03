import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Nav, MenuController, Events} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AdministrationPage} from "../administration/administration";
import {SharedLocalStorageProvider} from "../../providers/localstorageservice/sharedlocalstorage";

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

  pages: Array<{ title: string, component: any, icon: string }>;
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'user';
  isScrollingEnabled: boolean;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,
              public events: Events,
              private sharedLocalStorageProvider: SharedLocalStorageProvider) {
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Admin', component: AdministrationPage, icon: 'construct'}
    ];
    this.isScrollingEnabled = this.sharedLocalStorageProvider.getIsScrolling();
  }

  ionViewDidLoad() {
    this.sharedLocalStorageProvider.currentMessage.subscribe(message => this.isScrollingEnabled = message);
  }

  toggleScrolling() {
    this.sharedLocalStorageProvider.toggleScrolling();
  }


  openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }

}
