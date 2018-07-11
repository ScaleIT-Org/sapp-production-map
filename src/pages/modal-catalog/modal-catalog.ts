import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App, AppStatus} from "../../components/appicon-widget/app";
import {SharedStorage} from "ngx-store";

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
  apps: Array<App>;
  @SharedStorage() chosenApps: Array<App>;
  appClicked: Array<boolean>;
  ifShow: boolean;
  urlRegistry:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ifShow = false;
    if (this.chosenApps != null) {
      for (let i = 0; i < this.chosenApps.length; i++) {
        console.log(this.chosenApps[i].name);
      }
    }

    this.chosenApps = new Array();
    this.apps = new Array();
    //this.getData("");
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
    this.urlRegistry="";
    this.appClicked = new Array(this.apps.length);
    for (let i = 0; i < this.apps.length; i++) {
      this.appClicked[i] = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCatalogPage');
  }
 show() {
    console.log(this.ifShow);
    if (this.ifShow == false) {
      this.ifShow = true;
    }
    console.log(this.urlRegistry);
  }

  addApp(i: number) {
    //this.chosenApps.push(app);
    this.appClicked[i] = !this.appClicked[i];
  }

  submit() {
    for (let i = 0; i < this.appClicked.length; i++) {
      if (this.appClicked[i]) {
        this.chosenApps.push(this.apps[i])
      }
    }
    this.navCtrl.pop();
  }

  /*
  getData(path: string) {
    let dataObserver = this.dataProvider.getData(path);

    dataObserver.subscribe(dataFromProvider => {
      console.log("Data received:" + dataFromProvider);

      this.apps = dataFromProvider["node"]["nodes"].map(x => ({
        key: x["key"].split("/")[2],
        nodes: x["nodes"]
          .filter(x => x["value"] != "")
          .map(x => ({ key: x["key"].split("/")[3], value: x["value"] }))
      }));

      let myapps: App[] = new Array();
      this.apps.forEach(app => {
        let myapp: App = new App();

        // use a map and make it nicer
        let title = app["nodes"].filter(x => x["key"] === "title");
        let iconUrl = app["nodes"].filter(x => x["key"] === "iconUrl");
        let userUrl = app["nodes"].filter(x => x["key"] === "userUrl");
        let name = app["nodes"].filter(x => x["key"] === "name");
        // myapp.push(title);
        // map(x => ({key: x["key"], }))
        if (title[0]) myapp.name = title[0]["value"];
        if (name[0]) myapp.iconLocalHelper = name[0]["value"];
        if (iconUrl[0]) myapp.imgUrl = iconUrl[0]["value"];
        if (userUrl[0]) myapp.url = this.sanitizer.bypassSecurityTrustResourceUrl(userUrl[0]["value"]);

        myapp.status = AppStatus.Up;
        myapp.updateMissingRemoteIcons();
        myapps.push(myapp);
      });
      this.apps = myapps;
      // console.log("Data filtered:" + this.testData);
    });
  }*/
}
