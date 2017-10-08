import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  formRegister: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    public services: ServicesProvider, private alertCtrl: AlertController, public formBuilder: FormBuilder) {
      this.formRegister = this.createRegisterForm();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  createRegisterForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      confirmarContrasena: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.pattern('^([A-Za-záéíóú ])+$')]],
      telefono: ['', [Validators.pattern('^([4]{1}[0-9]{6})$|^([6-7]{1}[0-9]{7})$')]]
    })
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
