import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
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
  categoriaSelecionada:string = "Todos";

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public services: ServicesProvider, public loadingCtrl: LoadingController) {
    
  }

  getIniciativas() {
    return new Promise((resolve, reject) => {
      this.http.get(this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativas').subscribe(data => {
        this.iniciativas = data.json().Iniciativas;
        this.listaVisible = this.iniciativas;
      });
    })
  }

  getCategorias() {
    return new Promise((resolve, reject) => {
      this.http.get(this.services.obtenerURLGlobal()  + 'Categoria/WSListaCategorias').subscribe(data => {
        this.categorias = data.json().Categorias;
      });
    })
  }

  ionViewDidLoad() {
    this.getIniciativas();
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.getCategorias().then((data) => {
      this.categorias = data;
    });
  }

  cargarIniciativas() {
    this.getIniciativas();
    this.cargarCategoria(this.categoriaSelecionada);
  }

  mostrarIniciativa(iniciativa) {
    document.cookie = iniciativa.idIniciativa;
    this.navCtrl.push('IniciativaInfoPage', iniciativa);
  }

  anadirIniciativa() {
    this.navCtrl.push('AñadirIniciativaPage');
  }

  getItems(ev: any) {
    this.cargarIniciativas();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.iniciativas = this.iniciativas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  refrescarInicitavivas() {
    this.services.getIniciativas();
    let loader = this.loadingCtrl.create({
        content: "Actualizando Iniciativas..."
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.iniciativas = this.services.obtenerIniciativas().Iniciativas;
    }, 3000);
  }

  paginaInformacion() {
    this.navCtrl.push('AcercaDePage');
  }

  onSelectChange(event: string) {
    if (this.categoriaSelecionada == "Todos") {
      this.cargarIniciativas();
    } else {
      this.cargarCategoria(event);
    }
  }

  cargarCategoria(categoria) {
    this.listaVisible = [];
    for (let i = 0; i < this.iniciativas.length; i++) {
      if (this.iniciativas[i].Categoria == categoria) {
        this.listaVisible.push(this.iniciativas[i]);
      }
    }
  }

  darLike(iniciativa) {
    this.services.subirLike(iniciativa.idIniciativa);
  }
}
