import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpDataProvider } from "../../providers/http-data/http-data";
import { App, AppStatus } from "../../components/appicon-widget/app";

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
  testData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: HttpDataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdministrationPage");
  }

  getData(path: string) {
    let dataObserver = this.dataProvider.getData(path);

    dataObserver.subscribe(dataFromProvider => {
      console.log("Data received:" + dataFromProvider);

      this.testData = dataFromProvider["node"]["nodes"].map(x => ({
        key: x["key"].split("/")[2],
        nodes: x["nodes"]
          .filter(x => x["value"] != "")
          .map(x => ({key: x["key"].split("/")[3], value: x["value"]}))
      }));

      let myapps: App[] = new Array();
      this.testData.forEach(app => {
        let myapp: App = new App();

        // use a map and make it nicer
        let title = app["nodes"].filter(x => x["key"] === "title");
        let iconUrl = app["nodes"].filter(x => x["key"] === "iconUrl");
        let userUrl = app["nodes"].filter(x => x["key"] === "userUrl");
        let name = app["nodes"].filter(x => x["key"] === "name");
        // myapp.push(title);
          // map(x => ({key: x["key"], }))
        if (title[0]) myapp.name=title[0]["value"];
        if (name[0]) myapp.iconLocalHelper = name[0]["value"];
        if (iconUrl[0]) myapp.imgUrl = iconUrl[0]["value"];
        if (userUrl[0]) myapp.url=userUrl[0]["value"];

        myapp.status = AppStatus.Up;
        myapps.push(myapp);
      });
      this.testData = myapps;
      console.log("Data filtered:" + this.testData);
    });
  }
}
