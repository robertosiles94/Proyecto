import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public services: ServicesProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    var usuario = this.services.getCookie("usuario");
    this.esUsuario = usuario ? true : false;
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

  iniciarSesion() {
    document.cookie = "usuario" + "=" + 1;
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
    document.cookie = "usuario" + "=" + 1;
    this.services.setIdIniciativa(iniciativa.idIniciativa);
    var objeto = { valor: 0 };
    this.navCtrl.push('IniciativaInfoPage', objeto);
  }

  mostrarIniciativaUsuario() {
    var idUsuario = 1;
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
    let profileModal = this.modalCtrl.create('LoginPage');
    profileModal.present();
  }
}
