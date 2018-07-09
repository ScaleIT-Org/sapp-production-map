import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { AppFooterComponent } from "./app-footer/app-footer";
import { AppHeaderComponent } from "./app-header/app-header";
import { AppiconWidgetComponent } from "./appicon-widget/appicon-widget";
import { AngularDraggableModule } from "angular2-draggable";
import { ModalCatalogHeaderComponent } from './modal-catalog-header/modal-catalog-header';

@NgModule({
  declarations: [
    AppFooterComponent,
    AppHeaderComponent,
    AppiconWidgetComponent,
    ModalCatalogHeaderComponent
  ],
  imports: [IonicModule, AngularDraggableModule],
  exports: [AppFooterComponent, AppHeaderComponent, AppiconWidgetComponent,
    ModalCatalogHeaderComponent]
})
export class ComponentsModule {


  constructor() {}



}


