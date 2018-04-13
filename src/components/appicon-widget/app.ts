import { SafeResourceUrl } from "@angular/platform-browser";
import { Output, EventEmitter } from "@angular/core";

export enum AppStatus {
  Up = 1,
  Down,
  Warning,
  Disabled
}

export class App {
  constructor();
  constructor(
    public name?: string,
    public url?: SafeResourceUrl,
    public status: AppStatus = AppStatus.Disabled,
    public imgUrl: string = "assets/imgs/scaleit-waben.png",
    public previewPosition: string = "left",
    public iconLocalHelper: string = ""
  ) {}

  public previewing: boolean;

  updateMissingRemoteIcons() {
    // if (this.imgUrl === "assets/imgs/scaleit-waben.png") {
      if (this.iconLocalHelper != "") {
        this.imgUrl = "assets/imgs/icons/" + this.iconLocalHelper + ".png";
      }
    // }
  }
  checkStatus() {
    let result: string;
    switch (this.status) {
      case AppStatus.Up:
        result = "#32db64";
        break;
      case AppStatus.Down:
        // result = "map($color, danger)";
        result = "#f53d3d";
        break;
      case AppStatus.Warning:
        result = "#ffcc00";
        break;
      default:
        result = "gray";
        break;
    }
    return { "border-color": result };
  }

  previewToggle() {
    if (this.previewing == false) {
      this.previewing = true;
    } else this.previewing = false;
  }

  previewStyle() {
    let result = this.previewing ? "block" : "none";
    switch (this.previewPosition) {
      case "left":
        return { display: result, left: "7vw" };
      case "right":
        return { display: result, right: "7vw" };
      default:
        return { display: result };
    }
    // return { display: result, this.previewPosition: 7vw;};
  }

  onTopStyle() {
    let result = this.previewing ? 100 : 50;
    return { "z-index": result };
  }
}
