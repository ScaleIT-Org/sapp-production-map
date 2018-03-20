import { NgModule } from "@angular/core";
import { IonicPageModule, IonicModule } from "ionic-angular";
import { HomePage } from "./home";
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import { AngularDraggableModule } from "angular2-draggable";

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    PipesModule,
    AngularDraggableModule
  ],
  bootstrap: [HomePage]
})
export class HomePageModule {}
