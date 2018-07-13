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


  private messageSource = new BehaviorSubject(true);
  currentMessage = this.messageSource.asObservable();
  chosenApps:Array<App>;
  @LocalStorage()
  isScrolling: boolean;

  constructor() {
    console.log('Hello SharedLocalStorageProvider Provider');
    this.isScrolling = true;
  }

  toggleScrolling() {
    this.isScrolling = !this.isScrolling;
    this.messageSource.next(this.isScrolling);
    console.log('Provider changed scrolling to ' + this.isScrolling);
  }

  getIsScrolling() {
    return this.isScrolling;
  }
  getChosenApps(){
    return this.chosenApps;
  }
  
}
