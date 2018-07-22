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

  chosenApps: Array<App>;

  @LocalStorage() isScrolling: boolean;

  constructor() {


    if (this.isScrolling === null) {
      console.log("Local storage for scrolling was empty");
      this.isScrolling = true;
    }

    console.log('In constructor of  SharedLocalStorageProvider Provider, scrolling is ' + this.isScrolling);

    this.scrollingControl = new BehaviorSubject(this.isScrolling);
    this.chosenAppsControl = new BehaviorSubject<Array<App>>([]);

    if (this.chosenApps === null){
      this.chosenApps = [];
    }

    //this.chosenApps[0]=new App();
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
