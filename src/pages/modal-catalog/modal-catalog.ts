import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {App, AppStatus} from "../../components/appicon-widget/app";
import {SharedStorage} from "ngx-store";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpDataProvider} from "../../providers/http-data/http-data";
import {Subscription} from "rxjs/Subscription";
import {SharedLocalStorageProvider} from "../../providers/localstorageservice/sharedlocalstorage";

/**
 * Generated class for the ModalCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-catalog',
  templateUrl: 'modal-catalog.html',
})
export class ModalCatalogPage {
  apps: Array<App>; //all apps that are downloaded from registry
  chosenApps: Array<App>;  //chosen by user apps, which will appear on the map after pressing "Done" button
  appClicked: Array<boolean>;
  ifShow: boolean;
  urlRegistry: string;  //registry URL, must be provided by user
  previousUrlRegistry: string;
  registrySubscription: Subscription;

  //the constructor is executed only once, i.e. after the app starts
  constructor(public sanitizer: DomSanitizer,
              private dataProvider: HttpDataProvider,
              public navCtrl: NavController,
              private sharedLocalStorageProvider: SharedLocalStorageProvider,
              public navParams: NavParams) {
    this.ifShow = false;

    if (this.chosenApps != null) {
      for (let i = 0; i < this.chosenApps.length; i++) {
        console.log(this.chosenApps[i].name);
      }
    }
    this.chosenApps = [];
    this.previousUrlRegistry = "";

    this.urlRegistry = this.sharedLocalStorageProvider.getRegistryUrl();
    this.sharedLocalStorageProvider.getRegistryUrlControl().subscribe(newUrl => {
      this.urlRegistry = newUrl;
      console.log("process event of changed url in localstorage");
    });

    /*
    this.apps = new Array();
    this.getData("");
    this.apps.push(
      new App(
        "Ionic App",
        "https://codecraft.tv",
        //this.sanitizer.bypassSecurityTrustResourceUrl("https://codecraft.tv"),
        AppStatus.Up,
        "/assets/imgs/vis-app.png"
      )
    ); // this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8100"),
    this.apps.push(
      new App(
        "AOI Machine",
        "https://codecraft.tv",
        //this.sanitizer.bypassSecurityTrustResourceUrl("https://codecraft.tv"),
        AppStatus.Up,
        "/assets/imgs/machine-app.png",
        "right"
      )
    ); // this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:3000"),
    this.apps.push(
      new App("test-app", "localhost:3000/", AppStatus.Down)
    );
    this.apps.push(
      new App("test-app2", "localhost:3000/", AppStatus.Warning)
    );
    this.apps.push(new App("test-app3", "localhost:8100"));
*/
  }

  // this method is executed after each loading of this page
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCatalogPage');
  }

  show() {
    if (this.ifShow == false) {
      this.ifShow = true;
    }
    // in case url should is changed but old apps are saved and there is still subscription to old url
    if (this.previousUrlRegistry != this.urlRegistry && this.registrySubscription != undefined) {
      this.registrySubscription.unsubscribe();
      this.apps = [];
    }
    if (this.urlRegistry != "") {
      this.sharedLocalStorageProvider.setRegistryUrl(this.urlRegistry);
      console.log("set new url regitstry in local storage " + this.urlRegistry);
      this.getData();
    }

    this.previousUrlRegistry = this.urlRegistry;
  }

  addApp(i: number) {
    //this.chosenApps.push(app);
    this.appClicked[i] = !this.appClicked[i];
  }

  submit() {
    if (this.appClicked != undefined) {
      for (let i = 0; i < this.appClicked.length; i++) {
        if (this.appClicked[i]) {
          console.log("show " + i + "-th app on the map");
          this.sharedLocalStorageProvider.setChosenAppsByIndex(i,this.apps[i]);
        }
      }
      this.sharedLocalStorageProvider.setChosenApps();
    }
    this.navCtrl.pop();
  }

  getData() {
    this.dataProvider.baseUrl = this.urlRegistry + "/v2/keys/apps?recursive=true";
    let dataObserver = this.dataProvider.getData();
    this.registrySubscription = dataObserver.subscribe(httpResponse => {
      console.log("Data received:" + httpResponse);

      this.apps = [];

      let apps_data_JSON = httpResponse["node"]["nodes"].map(x => ({
        key: x["key"].split("/")[2],
        nodes: x["nodes"]
          .filter(x => x["value"] != "")
          .map(x => ({key: x["key"].split("/")[3], value: x["value"]}))
      }));

      //let myapps: App[] = [];
      apps_data_JSON.forEach(app_data => {
        let newApp: App = new App();

        // use a map and make it nicer
        let title = app_data["nodes"].filter(x => x["key"] === "title");
        let iconUrl = app_data["nodes"].filter(x => x["key"] === "iconUrl");
        let userUrl = app_data["nodes"].filter(x => x["key"] === "userUrl");
        let name = app_data["nodes"].filter(x => x["key"] === "name");
        // myapp.push(title);
        // map(x => ({key: x["key"], }))
        if (title[0]) newApp.name = title[0]["value"];
        if (name[0]) newApp.iconLocalHelper = name[0]["value"];
        if (iconUrl[0]) newApp.imgUrl = iconUrl[0]["value"];
        if (userUrl[0]) {
          console.log("Test added url is " + userUrl[0]["value"]);
          newApp.url = this.sanitizer.bypassSecurityTrustResourceUrl(userUrl[0]["value"]);
        }

        newApp.status = AppStatus.Up;  //TODO: check whether the app is available (online)
        newApp.updateMissingRemoteIcons();

        this.apps.push(newApp);

        this.appClicked = new Array(this.apps.length);
        for (let i = 0; i < this.apps.length; i++) {
          this.appClicked[i] = false;
        }
      });

    });
  }
}
