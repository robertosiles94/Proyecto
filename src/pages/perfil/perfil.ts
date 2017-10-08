import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  nombre: string;
  telefono: string;
  id: string;
  formRegister: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private alertCtrl: AlertController, public formBuilder: FormBuilder, public services: ServicesProvider,
    public http: Http, public modalCtrl: ModalController) {
    this.formRegister = this.createRegisterForm();
    this.id = this.services.getCookie("usuario");
    this.nombre = this.services.getCookie("nombre");
    this.telefono = this.services.getCookie("telefono");
    if (this.telefono == 'undefine') {
      this.telefono = "";
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  createRegisterForm() {
    return this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^([A-Za-záéíóú ])+$')]],
      telefono: ['', [Validators.pattern('^([4]{1}[0-9]{6})$|^([6-7]{1}[0-9]{7})$')]]
    })
  }

  editarUsuario() {
    var usuario = {
      id: this.id, nombreCompleto: this.nombre, telefono: this.telefono
    };
    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.services.URLGlobal + 'Usuario/EditarDatos?idUsuario=' + usuario.id + '&nombreCompleto=' + usuario.nombreCompleto +
      '&telefono=' + usuario.telefono, usuario, options)
      .subscribe(data => {
        if (data.json().succes == true) {
          let alert = this.alertCtrl.create({
            title: 'Datos modificados',
            subTitle: 'Los datos se modificaron correctamente',
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.dismiss();
              }
            }]
          });
          alert.present();
          document.cookie = "nombre" + "=" + usuario.nombreCompleto;
          document.cookie = "telefono" + "=" + usuario.telefono;
          this.navCtrl.push('IniciativasPage');
        } else {
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error al modificar los datos, verique los campos y vuelva a intentarlo.',
            buttons: ['Aceptar']
          });
          alert.present();
        }

      }, error => {
        console.log(error);
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Error al modificar los datos, consulte con el personal de sistemas.',
          buttons: ['Aceptar']
        });
        alert.present();
      });
  }

  cambiarContrasena() {
    let profileModal = this.modalCtrl.create('CambiarContrasenaPage');
    profileModal.present();
    this.dismiss();
  }

}
