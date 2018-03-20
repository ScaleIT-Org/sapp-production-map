import { Component, Input } from "@angular/core";

/**
 * Generated class for the AppHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-header",
  templateUrl: "app-header.html"
})
export class AppHeaderComponent {
  text: string;
  @Input() pageName: string;

  constructor() {
    console.log("Hello AppHeaderComponent Component");
    this.pageName = "page name";
    this.text = "Hello World";
  }
}
