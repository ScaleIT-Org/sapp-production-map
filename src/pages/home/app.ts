export enum AppStatus {
  Up = 1,
  Down,
  Warning,
  Disabled
}

export class App {
  constructor(
    public name: string,
    public url: string,
    public status: AppStatus = AppStatus.Disabled,
    public imgUrl: string = "assets/imgs/scaleit-waben.png"
  ) {}
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
}
