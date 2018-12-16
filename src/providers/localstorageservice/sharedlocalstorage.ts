import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalStorage} from "ngx-store";
import {App} from "../../components/appicon-widget/app";

/*
  Generated class for the SharedLocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedLocalStorageProvider {


  private scrollingControl: BehaviorSubject<boolean>;
  private registryUrlControl: BehaviorSubject<string>;
  private chosenAppsControl: BehaviorSubject<Array<App>>;

  private chosenApps: Array<App>;
  @LocalStorage() chosenAppsJSON: string;

  @LocalStorage() isScrolling: boolean;
  @LocalStorage() registryUrl: string;

  constructor() {

    if (this.isScrolling === null) {
      console.log("Local storage for scrolling was empty");
      this.isScrolling = true;
    }

    console.log("before restoring/init of chosenAppsJSON");
    if (this.chosenAppsJSON !== null) {
      console.log("Local storage for chosenAppsJSON is already initialized...");
      this.chosenApps = JSON.parse(this.chosenAppsJSON);
      this.chosenApps = this.objToArrayOfApps(this.chosenApps);
    } else {
      console.log("Local storage for chosenAppsJSON is not initialized");
      this.chosenApps = [];
    }

    if (this.registryUrl === null) {
      console.log("url string was not set in local storage");
      this.registryUrl = 'http://';
    }


    console.log('In constructor of  SharedLocalStorageProvider Provider, scrolling is ' + this.isScrolling);

    this.scrollingControl = new BehaviorSubject(this.isScrolling);
    this.scrollingControl.subscribe(newScrolling => this.isScrolling = newScrolling);

    this.registryUrlControl = new BehaviorSubject<string>(this.registryUrl);
    this.registryUrlControl.subscribe(newUrl => this.registryUrl = newUrl);

    this.chosenAppsControl = new BehaviorSubject<Array<App>>(this.chosenApps);
    this.chosenAppsControl.subscribe(newChosenApps => {
      this.chosenApps = newChosenApps;
      this.chosenAppsJSON = JSON.stringify(this.chosenApps); //need to convert 'this.chosenApps' array to JSON, since localstorage can save only JSONs
      console.log("==> new length is " + this.chosenApps.length);
    });

  }

  objToArrayOfApps(arrayOfObj: Array<any>) {
    let apps: Array<App> = [];
    arrayOfObj.forEach(obj => {
      let app: App = new App();
      if (obj.name != undefined) app.name = obj.name;
      if (obj.url != undefined) app.url = obj.url;
      if (obj.status != undefined) app.status = obj.status;
      if (obj.imgUrl != undefined) app.imgUrl = obj.imgUrl;
      if (obj.iconLocalHelper != undefined) app.iconLocalHelper = obj.iconLocalHelper;
      if (obj.endPosition != undefined) {
        app.endPosition.x = obj.endPosition.x;
        app.endPosition.y = obj.endPosition.y;
      }
      apps.push(app);
    });
    return apps;
  }

  toggleScrolling() {
    this.isScrolling = !this.isScrolling;
    this.scrollingControl.next(this.isScrolling);
    console.log('Provider changed scrolling to ' + this.isScrolling);
  }

  getIsScrolling() {
    return this.isScrolling;
  }

  getScrollingControl() {
    return this.scrollingControl;
  }

  getChosenAppsControl() {
    return this.chosenAppsControl;
  }

  getChosenApps() {
    return this.chosenApps;
  }

  setChosenAppsByIndex(index: number, app: App) {
    this.chosenApps.push(app);
  }

  delChosenAppsByIndex(index: number) {
    this.chosenApps.splice(index, 1);
    this.chosenAppsControl.next(this.chosenApps);

  }

  setChosenApps() {
    this.chosenAppsControl.next(this.chosenApps);
  }

  getRegistryUrl() {
    return this.registryUrl;
  }

  getRegistryUrlControl() {
    return this.registryUrlControl;
  }

  setRegistryUrl(newUrl: string) {
    console.log("sharedlocalstorage.ts: now the url is " + this.registryUrl);
    this.getRegistryUrlControl().next(newUrl);
  }
}

