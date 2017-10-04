import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ModalController, Events } from 'ionic-angular';
/**
 * Generated class for the AcercaDePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca-de',
  templateUrl: 'acerca-de.html',
})
export class AcercaDePage {

  nombreUsuario: string = 'Iniciar Sesión';
  idUsuario: any;
  correo: string;
  telefono: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public modalCtrl: ModalController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaDePage');
  }

  opcionesLogin() {
    if (this.nombreUsuario == 'Iniciar Sesión') {
      let profileModal = this.modalCtrl.create('LoginPage');
      profileModal.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Datos Usuario',
        subTitle: 'Nombre: ' + this.nombreUsuario + '<br>Correo: ' + this.correo + '<br>Teléfono: ' + this.telefono,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Cerrar Sesión',
            handler: () => {
              this.nombreUsuario = 'Iniciar Sesión';
              document.cookie = "usuario" + "=" + 0;
              document.cookie = "nombre" + "=" + '';
              document.cookie = "telefono" + "=" + '';
              document.cookie = "email" + "=" + '';
              document.cookie = "iniciativa" + "=" + '';
              window.location.reload();
            }
          }]
      });
      alert.present();
    }
  }

}
