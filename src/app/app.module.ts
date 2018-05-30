import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ScaleITDomainApp } from './app.component';
import { HttpDataProvider } from '../providers/http-data/http-data';
import { HttpClientModule } from '@angular/common/http';
import {MenuPageModule} from "../pages/menu/menu.module";

@NgModule({
  // somehow ionicons get busted when doing lazy loaded pages (declare HomePage here and they work)
  declarations: [ScaleITDomainApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ScaleITDomainApp, {
      //not working
      backButtonText: ""
    }),
    // because the root page component is lazy loaded, it must be imported in the root module
    HttpClientModule,
    MenuPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ScaleITDomainApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpDataProvider
  ]
})
export class AppModule {}
