import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';

import { ModalController} from 'ionic-angular';
/**
 * Generated class for the IniciativasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciativas',
  templateUrl: 'iniciativas.html',
})
export class IniciativasPage {

  iniciativas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public services: ServicesProvider, 
    public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.iniciativas = this.services.obtenerIniciativas().Iniciativas;
    }, 3000);
  }

  mostrarIniciativa(iniciativa) {
    this.navCtrl.push('IniciativaInfoPage', iniciativa);
  }

  anadirIniciativa() {
    this.navCtrl.push('AñadirIniciativaPage');
  }

  getItems(ev: any) {
    this.ionViewDidLoad();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.iniciativas = this.iniciativas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  refrescarInicitavivas() {
    this.services.getIniciativas();
    let loader = this.loadingCtrl.create({
      content: "Actualizando Iniciativas..."
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.iniciativas = this.services.obtenerIniciativas().Iniciativas;
    }, 3000);
  }

  darLike(iniciativa) {
    this.services.subirLike(iniciativa.idIniciativa);
  }

  opcionesLogin() {
    let profileModal = this.modalCtrl.create('LoginPage');
    profileModal.present();
  }
}
