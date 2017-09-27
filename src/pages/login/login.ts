import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ModalController, Events } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo: string;
  contrasena: string;
  profile: any;
  formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public modalCtrl: ModalController, public services: ServicesProvider, public http: Http, public formBuilder: FormBuilder,
    private alertCtrl: AlertController, public events: Events) {
    this.formLogin = this.createLoginForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  registrarse() {
    let profileModal = this.modalCtrl.create('CrearCuentaPage');
    profileModal.present();
    this.dismiss();
  }

  createLoginForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get(this.services.URLGlobal + 'Usuario/Login?usuarioEmail=' + this.correo + '&password=' + this.contrasena, options).subscribe(data => {
        if (data.json().estado != "3") {
          this.profile = data.json();
          if (this.profile.estado == "0") {
            let alert = this.alertCtrl.create({
              title: 'Inicio de sesión',
              subTitle: 'Ingreso con éxito. Bienvenido: ' + this.profile.nombre,
              buttons: ['Aceptar']
            });
            alert.present().then(response => {
              document.cookie = "usuario" + "=" + this.profile.idUsuario;
              document.cookie = "nombre" + "=" + this.profile.nombre;
              document.cookie = "telefono" + "=" + this.profile.telefono;
              document.cookie = "email" + "=" + this.profile.email;
              window.location.reload();
            });
          } else {
            window.location.href = "http://bigwasi.org/Bigwasi";
          }
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'El correo no es válido o la contraseña es incorrecta.',
            buttons: ['Aceptar']
          });
          alert.present();
        }
      });
    })
  }
}
