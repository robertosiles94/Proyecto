import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesProvider } from '../../providers/services/services';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the CambiarContrasenaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contrasena',
  templateUrl: 'cambiar-contrasena.html',
})
export class CambiarContrasenaPage {

  id: string;
  antiguaContrasena: string;
  contrasena: string;
  confirmContrasena: string;
  formRegister: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public formBuilder: FormBuilder, public services: ServicesProvider, private alertCtrl: AlertController,
    public http: Http) {
    this.formRegister = this.createRegisterForm();
    this.id = this.services.getCookie("usuario");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  createRegisterForm() {
    return this.formBuilder.group({
      contrasenaAntigua: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      confirmarContrasena: ['', [Validators.required]],
    })
  }

  cambiarContrasena() {
    var usuario = {
      id: this.id, oldPassword: this.antiguaContrasena, newPassword: this.contrasena
    };
    if (this.contrasena == this.confirmContrasena) {
      let headers = new Headers();
      headers.append('Content-Type', 'text/plain');
      let options = new RequestOptions({ headers: headers });
      this.http.post(this.services.URLGlobal + 'Usuario/EditarPassword?idUsuario=' + usuario.id + '&password=' + usuario.oldPassword +
        '&NewPassword=' + usuario.newPassword, usuario, options)
        .subscribe(data => {
          console.log(data);
          if (data.json().succesPassword == true) {
            let alert = this.alertCtrl.create({
              title: 'Contraseña modificada',
              subTitle: 'La contraseña se modificó correctamente, su sesión se cerrará para aplicar los cambios.',
              buttons: [{
                text: 'Aceptar',
                handler: () => {
                  this.dismiss();
                }
              }]
            });
            alert.present().then(data => {
              setTimeout(() => {
                document.cookie = "usuario" + "=" + 0;
                document.cookie = "nombre" + "=" + '';
                document.cookie = "telefono" + "=" + '';
                document.cookie = "email" + "=" + '';
                document.cookie = "iniciativa" + "=" + '';
                this.navCtrl.push('IniciativasPage');
              }, 3000);
            });
            

          } else {
            const alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Error al modificar la contraseña, verique los campos y vuelva a intentarlo.',
              buttons: ['Aceptar']
            });
            alert.present();
          }
        }, error => {
          console.log(error);
          const alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error al modificar la contraseña, consulte con el personal de sistemas.',
            buttons: ['Aceptar']
          });
          alert.present();
        });
    } else {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Las contraseñas nuevas no coinciden, verifique los datos.',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }

}
