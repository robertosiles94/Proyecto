import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RecuperarContrasenaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-contrasena',
  templateUrl: 'recuperar-contrasena.html',
})
export class RecuperarContrasenaPage {

  nombre: string;
  correo: string;
  contrasena: string;
  confirmContrasena: string;
  formRegister: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public services: ServicesProvider, private alertCtrl: AlertController, public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController) {
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
    })
  }

  recuperarContrasena() {
    if (this.contrasena == this.confirmContrasena) {
      var usuario = {
        email: this.correo,
        nombreCompleto: this.nombre,
        contrasena: this.contrasena,
        id: 0
      }
      var respuesta;

      let loader = this.loadingCtrl.create({
        content: "Validando datos..."
      });
      let loader2 = this.loadingCtrl.create({
        content: "Por favor espere..."
      });
      loader.present().then(() => {
        this.services.verificarUsuario(usuario).subscribe((response) => {
          loader.dismiss();
          respuesta = JSON.parse(response['_body']);
          if (respuesta.mensaje == 'El usuario no  se encuentra registrado') {
            let alert = this.alertCtrl.create({
              title: 'No se pudo modificar la contraseña',
              subTitle: 'No se encuentran coincidencias, verifique el correo y el nombre de usuario.',
              buttons: ['Aceptar']
            });
            alert.present()
          } else {
            usuario.id = respuesta.idUsuario;
            var respuesta2;
            loader2.present().then(() => {
              this.services.resetearPassword(usuario).subscribe((response) => {
                respuesta2 = JSON.parse(response['_body']);
                loader2.dismiss();
                if (respuesta2.succesPassword == true) {
                  this.dismiss();
                  let alert = this.alertCtrl.create({
                    title: 'Contraseña restablecida',
                    subTitle: 'Se cambió la contraseña con éxito, inicie sesión para comenzar a interactuar con el sistema.',
                    buttons: ['Aceptar']
                  });
                  alert.present()
                } else {
                  let alert = this.alertCtrl.create({
                    title: 'Error al modificar los datos',
                    subTitle: 'Ocurrió un error al modificar la contraseña, por favor vuelva a intentarlo o consulte con el administrador de sistemas.',
                    buttons: ['Aceptar']
                  });
                  alert.present()
                }
              })
            });
          }
        })
      });
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
