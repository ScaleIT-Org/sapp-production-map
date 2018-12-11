import { DirectivesModule } from './../../directives/directives.module';
import { NgModule } from "@angular/core";
import { IonicPageModule} from "ionic-angular";
import { HomePage } from "./home";
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";


@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    PipesModule,
    DirectivesModule
  ],
  bootstrap: [HomePage]
})
export class HomePageModule {}
