import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { Menu } from '../pages/menu/menu';

import { AppData } from '../providers/app-data';

import { HomePage } from '../pages/home/home';
import { Characters } from '../pages/characters/characters';
import { CharPage } from '../pages/char-page/char-page';
import { Items } from '../pages/items/items';
import { ItemPage } from '../pages/item-page/item-page';
import { InsertPage } from '../pages/insert-page/insert-page';
import { Reinforcements } from '../pages/reinforcements/reinforcements';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Menu,
    HomePage,
    Characters,
    CharPage,
    Items,
    ItemPage,
    InsertPage,
    Reinforcements
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Menu,
    HomePage,
    Characters,
    CharPage,
    Items,
    ItemPage,
    InsertPage,
    Reinforcements
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
