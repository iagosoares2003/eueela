import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScapPage } from '../pages/scap/scap';
import { PerfilPage } from '../pages/perfil/perfil';
import { OnlinePage } from '../pages/online/online';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AlertaPage } from '../pages/alerta/alerta';
import { SuasConfiguraOesPage } from '../pages/suas-configura-oes/suas-configura-oes';
import { NossasFotosPage } from '../pages/nossas-fotos/nossas-fotos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ScapPage,
    PerfilPage,
    OnlinePage,
    LoginPage,
    SignupPage,
    AlertaPage,
    SuasConfiguraOesPage,
    NossasFotosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScapPage,
    PerfilPage,
    OnlinePage,
    LoginPage,
    SignupPage,
    AlertaPage,
    SuasConfiguraOesPage,
    NossasFotosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}