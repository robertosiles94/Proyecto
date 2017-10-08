import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ModalController, Events } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
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
  esUsuario: boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, 
    public modalCtrl: ModalController, public events: Events, private services: ServicesProvider) {
      var usuario = this.services.getCookie("usuario");
      if (usuario == "" || usuario == "0") {
        this.esUsuario = false;
        this.nombreUsuario = 'Iniciar Sesión';
      } else {
        this.nombreUsuario = this.services.getCookie("nombre");
        this.esUsuario = true;
      }
      this.correo = this.services.getCookie("email");
      this.telefono = this.services.getCookie("telefono");
  }

  opcionesLogin() {
    if (this.nombreUsuario == 'Iniciar Sesión') {
      let profileModal = this.modalCtrl.create('LoginPage');
      profileModal.present();
    } else {
      if (this.telefono == 'undefine') {
        this.telefono = "N/A";
      }
      let alert = this.alertCtrl.create({
        title: 'Datos Usuario',
        subTitle: 'Nombre: ' + this.nombreUsuario + '<br>Correo: ' + this.correo + '<br>Teléfono: ' + this.telefono,
        buttons: [
          {
            text: 'Modificar',
            handler: () => {
              let perfilModal = this.modalCtrl.create('PerfilPage');
              perfilModal.present();
            }
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
              this.navCtrl.push('IniciativasPage');
            }
          }]
      });
      alert.present();
    }
  }

}
