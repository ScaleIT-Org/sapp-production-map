export enum AppStatus {
    Up = 1,
    Down,
    Warning
}

export class App {
         constructor(public name: string, public url: string, public status: AppStatus = AppStatus.Up, public imgUrl: string = "assets/imgs/scaleit-waben.png") {}
         checkStatus() {
           return { border: "thick solid map($color, secondary)" };
         }
       }
