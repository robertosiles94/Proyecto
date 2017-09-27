import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the CrearCuentaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cuenta',
  templateUrl: 'crear-cuenta.html',
})
export class CrearCuentaPage {

  nombre: string;
  telefono: string;
  correo: string;
  contrasena: string;
  confirmContrasena: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    public services: ServicesProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  registrar() {
    if(this.contrasena ==  this.confirmContrasena) {
      this.services.registrarUsuario({email: this.correo, nombreCompleto: this.nombre, telefono: this.telefono, password: this.contrasena});
      this.dismiss();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Las contraseñas no coinciden.',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }

}
