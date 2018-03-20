import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpDataProvider } from '../../providers/http-data/http-data';

/**
 * Generated class for the AdministrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "admin",
  segment: "admin"
})
@Component({
  selector: "page-administration",
  templateUrl: "administration.html"
})
export class AdministrationPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: HttpDataProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdministrationPage");
  }
}
