import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
	AbsoluteDrag
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	FileTransfer,
    FileTransferObject,
    File,
    Camera,
	FileChooser
  ]
})
export class AppModule {}
