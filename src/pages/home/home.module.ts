import { DirectivesModule } from './../../directives/directives.module';
import { NgModule } from "@angular/core";
import { IonicPageModule} from "ionic-angular";
import { HomePage } from "./home";
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import {CookieModule} from "ngx-cookie";


@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    PipesModule,
    DirectivesModule,
    CookieModule.forRoot()
  ],
  bootstrap: [HomePage]
})
export class HomePageModule {}
