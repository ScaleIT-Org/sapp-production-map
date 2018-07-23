import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalStorage} from "ngx-store";
import {App} from "../../components/appicon-widget/app";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the SharedLocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedLocalStorageProvider {


  private scrollingControl: BehaviorSubject<boolean>;
  private chosenAppsControl: BehaviorSubject<Array<App>>;
  private registryUrlControl: BehaviorSubject<string>;

  chosenApps: Array<App>;

  @LocalStorage() isScrolling: boolean;
  @LocalStorage() registryUrl: string;

  constructor() {


    if (this.isScrolling === null) {
      console.log("Local storage for scrolling was empty");
      this.isScrolling = true;
    }

    this.chosenApps = [];

    if (this.registryUrl === null) {
      console.log("url string was not set in local storage");
      this.registryUrl = 'http://';
    }


    console.log('In constructor of  SharedLocalStorageProvider Provider, scrolling is ' + this.isScrolling);

    this.scrollingControl = new BehaviorSubject(this.isScrolling);
    this.scrollingControl.subscribe(newScrolling => this.isScrolling = newScrolling);

    this.chosenAppsControl = new BehaviorSubject<Array<App>>([]);
    this.chosenAppsControl.subscribe(newChosenApps => this.chosenApps = newChosenApps);

    this.registryUrlControl = new BehaviorSubject<string>(this.registryUrl);
    this.registryUrlControl.subscribe(newUrl => this.registryUrl = newUrl);



    //this.chosenApps[0]=new App();
    //console.log("test 1 "+this.chosenApps.length);
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
    //this.chosenApps[index] = app;
    this.chosenApps.push(app);
  }

  setChosenApps() {
    this.chosenAppsControl.next(this.chosenApps);
    console.log("added event with " + this.chosenApps.length + " apps");
  }

  getRegistryUrl() {
    return this.registryUrl;
  }

  getRegistryUrlControl() {
    return this.registryUrlControl;
  }

  setRegistryUrl(newUrl: string) {
    this.registryUrl = newUrl;
    console.log("sharedlocalstorage.ts: now the url is " + this.registryUrl);
    this.getRegistryUrlControl().next(newUrl);
  }
}

/*
@Injectable()
export class SharedLocalStorageProvider {

  private scrollingControl = new BehaviorSubject(true);
  scrollingControlStream = this.scrollingControl.asObservable();

  chosenApps: Array<App>;
  @LocalStorage() isScrolling: boolean;

  constructor() {
    console.log('Hello SharedLocalStorageProvider Provider');
    this.isScrolling = true;
    this.chosenApps = [];
    this.chosenApps[0]=new App();
    console.log("test 1 "+this.chosenApps.length);
  }

  toggleScrolling() {
    this.isScrolling = !this.isScrolling;
    this.scrollingControl.next(this.isScrolling);
    console.log('Provider changed scrolling to ' + this.isScrolling);
  }

  getIsScrolling() {
    return this.isScrolling;
  }


  getChosenApps() {
    return this.chosenApps;
  }

  setChosenAppsByIndex(index: number, app: App) {
    this.chosenApps[index] = app;
  }
}*/
