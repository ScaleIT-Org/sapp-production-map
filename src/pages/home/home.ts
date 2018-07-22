import {IonicPage, Events, ModalController} from 'ionic-angular';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LocalStorage} from "ngx-store";
import {SharedLocalStorageProvider} from "../../providers/localstorageservice/sharedlocalstorage";

/**
 * The home page, that will be rooted from menu-page (which is the root page in this app).
 * Here the user has an ability to select a map one needs
 */
@IonicPage({
  name: "user",
  segment: "user"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedFile: File;

  @LocalStorage()
  selectedMap: any;

  isScrollingEnabled: boolean;

  reader: FileReader;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public events: Events, public modalCtrl: ModalController,
              private sharedLocalStorageProvider: SharedLocalStorageProvider) {
    this.reader = new FileReader();
    this.selectedMap = "assets/imgs/grundriss.png"; //set a default map to show until user selects something else
    this.isScrollingEnabled = this.sharedLocalStorageProvider.getIsScrolling();
  }

  ionViewDidLoad() {
    this.sharedLocalStorageProvider.getScrollingControl().subscribe(message => {
      this.isScrollingEnabled = message;
    });
  }

  /**
   * changes a map to be viewed, is invoked when user selects a new map using "select map" button.
   * @param event denotes an event to react, invoked by a user, who selects a new map, clicking "select map" button.
   */
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.reader.onload = (e: any) => {
      this.selectedMap = e.target.result;
    };

    console.log(this.selectedMap);
    this.reader.readAsDataURL(event.target.files[0]);
  }

  checkScrolling() {
    return this.isScrollingEnabled;
  }

  presentModal() {
    let modal = this.modalCtrl.create('ModalCatalogPage');
    modal.present();
  }

}
