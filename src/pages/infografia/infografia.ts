import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ModalController, Events } from 'ionic-angular';
/**
 * Generated class for the InfografiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infografia',
  templateUrl: 'infografia.html',
})
export class InfografiaPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public app:MyApp, public modalCtrl: ModalController, public events: Events) {
  }

  ionViewDidLoad() {
   
  }

  opcionesLogin() {
      let profileModal = this.modalCtrl.create('LoginPage');
      profileModal.present();
  }

  registrarse() {
    let profileModal = this.modalCtrl.create('CrearCuentaPage');
    profileModal.present();
  }

  iniciativas() {
    this.navCtrl.push('IniciativasPage');
  }

  email(){
    alert("reportesbigwasi@gmail.com");
  }

}
