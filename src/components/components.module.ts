import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { AppFooterComponent } from './app-footer/app-footer';
import { AppHeaderComponent } from './app-header/app-header';
@NgModule({
  declarations: [
    AppFooterComponent,
    AppHeaderComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    AppFooterComponent,
    AppHeaderComponent
  ]
})
export class ComponentsModule {}
