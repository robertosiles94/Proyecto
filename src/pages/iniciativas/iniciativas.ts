import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';

import { ModalController, Events } from 'ionic-angular';
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
  listaVisible: any;
  categorias: any;
  esUsuario: boolean;
  loader: any;
  categoriaSelecionada: string = "Todos";
  idUsuario: any;
  nombreUsuario: string = 'Iniciar Sesión';
  correo: string;
  telefono: string;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public services: ServicesProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public modalCtrl: ModalController, public events: Events) {
    var usuario = this.services.getCookie("usuario");
    if (usuario == "" || usuario == "0") {
      this.esUsuario = false;
    } else {
      this.esUsuario = true;
    }
    this.nombreUsuario = this.services.getCookie("nombre");
    this.correo = this.services.getCookie("email");
    this.telefono = this.services.getCookie("telefono");

    if (this.services.getCookie("usuario") == "" || this.services.getCookie("usuario") == "0") {
      this.nombreUsuario = 'Iniciar Sesión';
    }
  }

  getIniciativas() {
    return new Promise((resolve, reject) => {
      this.http.get(this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativas').subscribe(data => {
        this.iniciativas = data.json().Iniciativas;
        this.listaVisible = this.iniciativas;
        this.loader.dismiss();
      });
    })
  }

  getCategorias() {
    return new Promise((resolve, reject) => {
      this.http.get(this.services.obtenerURLGlobal() + 'Categoria/WSListaCategorias').subscribe(data => {
        this.categorias = data.json().Categorias;
      });
    })
  }

  ionViewDidLoad() {
    this.cargarIniciativas();
    this.getCategorias();
  }

  obtenerCategorias() {
    this.getCategorias().then((data) => {
      this.categorias = data;
    });
  }

  cargarIniciativas() {
    this.loader = this.loadingCtrl.create({
      content: "Obteniendo las Iniciativas..."
    });
    this.loader.present();
    this.getIniciativas();
  }

  mostrarIniciativa(iniciativa) {
    document.cookie = "iniciativa" + "=" + iniciativa.idIniciativa;
    this.services.setIdIniciativa(iniciativa.idIniciativa);
    var objeto = { valor: 0 };
    this.navCtrl.push('IniciativaInfoPage', objeto);
  }

  mostrarIniciativaUsuario() {
    this.navCtrl.push('HistorialUsuarioPage');
  }

  anadirIniciativa() {
    this.navCtrl.push('AñadirIniciativaPage');
  }

  getItems(ev: any) {
    this.listaVisible = this.iniciativas;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listaVisible = this.iniciativas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.cargarCategoria(this.categoriaSelecionada);
    }
  }

  refrescarInicitavivas() {
    this.cargarIniciativas();
  }

  paginaInformacion() {
    this.navCtrl.push('AcercaDePage');
  }

  onSelectChange(event: string) {
    if (this.categoriaSelecionada == "Todos") {
      this.listaVisible = this.iniciativas;
    } else {
      this.cargarCategoria(event);
    }
  }

  cargarCategoria(categoria) {
    if (categoria != "") {
      this.listaVisible = [];
      for (let i = 0; i < this.iniciativas.length; i++) {
        if (this.iniciativas[i].Categoria == categoria) {
          this.listaVisible.push(this.iniciativas[i]);
        }
      }
    }
  }

  darLike(iniciativa) {
    this.services.subirLike(iniciativa.idIniciativa);
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
