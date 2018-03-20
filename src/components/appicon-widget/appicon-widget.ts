import { Component } from "@angular/core";
import { App, AppStatus } from "./app";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the AppiconWidgetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "appicon-widget",
  templateUrl: "appicon-widget.html"
})
export class AppiconWidgetComponent {
  apps: App[];

  constructor(public sanitizer: DomSanitizer) {
    console.log("Initializing App Icons...");
  }

  ngAfterViewInit() {
    this.apps = new Array();
    this.apps.push(
      new App(
        "Ionic App",
        this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8100"),
        AppStatus.Up,
        "/assets/imgs/vis-app.png"
      )
    );
    this.apps.push(
      new App(
        "AOI Machine",
        this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:3000"),
        AppStatus.Up,
        "/assets/imgs/machine-app.png",
        "right"
      )
    );
    // this.apps.push(
    //   new App("test-app", "http://localhost:3000/", AppStatus.Down)
    // );
    // this.apps.push(
    //   new App("test-app2", "http://localhost:3000/", AppStatus.Warning)
    // );
    // this.apps.push(new App("test-app3", "http://localhost:8100"));
  }
}
