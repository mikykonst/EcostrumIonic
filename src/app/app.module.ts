import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {LoginPage} from "../pages/login/login";
import {MainPage} from "../pages/main/main";
import {AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";
import { ProductProvider } from '../providers/product/product';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFingerprintAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ProductProvider
  ]
})
export class AppModule {}
