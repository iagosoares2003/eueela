import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OnlinePage } from '../pages/online/online';
import { AlertaPage } from '../pages/alerta/alerta';
import { PerfilPage } from '../pages/perfil/perfil';
import { SuasConfiguraOesPage } from '../pages/suas-configura-oes/suas-configura-oes';
import { NossasFotosPage } from '../pages/nossas-fotos/nossas-fotos';


import { ScapPage } from '../pages/scap/scap';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ScapPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToOnline(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OnlinePage);
  }goToAlerta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AlertaPage);
  }goToScap(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ScapPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToSuasConfiguraOes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SuasConfiguraOesPage);
  }goToNossasFotos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NossasFotosPage);
  }
  goToMinhasFotos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NossasFotosPage);
  }
}
