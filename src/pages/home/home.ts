import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, AppStatus } from './app';

@IonicPage({
  name:"user",
  segment: "user"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  apps: App[];

  constructor(public navCtrl: NavController) {
    this.apps = new Array();
    this.apps.push(new App("VisApp", "localhost:3000", AppStatus.Up, "/assets/imgs/vis-app.png"));
    this.apps.push(new App("AOI Digital Twin 1", "localhost:3001", AppStatus.Up, "/assets/imgs/machine-app.png"));
    this.apps.push(new App("test-app", "google.com", AppStatus.Down));
    this.apps.push(new App("test-app2", "google.com"));
  }
}
