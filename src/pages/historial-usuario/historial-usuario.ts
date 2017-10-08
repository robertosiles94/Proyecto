import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ModalController, AlertController } from 'ionic-angular';

/**
 * Generated class for the HistorialUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial-usuario',
  templateUrl: 'historial-usuario.html',
})
export class HistorialUsuarioPage {

  iniciativas: any;
  listaVisible: any;
  loader: any;
  esUsuario: boolean;
  nombreUsuario: string;
  categorias: any;
  categoriaSelecionada: string = "Todos";
  correo: string;
  telefono: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider, 
    public http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private modal:ModalController) {
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
  

  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: "Obteniendo las Iniciativas..."
    });
    this.loader.present();
    var index = this.services.getCookie("usuario");
    var urlIniciativa = this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativasUsuario/' + index;
    this.getHistorial(urlIniciativa);
    this.getCategorias();
  }

  getCategorias() {
    return new Promise((resolve, reject) => {
      this.http.get(this.services.obtenerURLGlobal() + 'Categoria/WSListaCategorias').subscribe(data => {
        this.categorias = data.json().Categorias;
      });
    })
  }

  getItems(ev: any) {
    this.listaVisible = this.iniciativas;
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.listaVisible = this.iniciativas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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

  getHistorial(urlIniciativa) {
    return new Promise((resolve, reject) => {
      this.http.get(urlIniciativa).subscribe(data => {
        this.iniciativas = data.json();
        this.iniciativas = this.iniciativas.Iniciativas;
        this.listaVisible = this.iniciativas;
        this.loader.dismiss();
      });
    })
  }

  mostrarIniciativa(iniciativa) {
    var objeto = { valor: 1, iniciativa: iniciativa };
    this.navCtrl.push('IniciativaInfoPage', objeto);
  }

  opcionesLogin() {
    if (this.nombreUsuario == 'Iniciar Sesión') {
      let profileModal = this.modal.create('LoginPage');
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
              let perfilModal = this.modal.create('PerfilPage');
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
