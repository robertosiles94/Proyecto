import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';

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
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider, public http: Http, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.loader = this.loadingCtrl.create({
      content: "Obteniendo las Iniciativas..."
    });
    this.loader.present();
    var index = this.services.getCookie("usuario");
    var urlIniciativa = this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativasUsuario/' + index;
    this.getHistorial(urlIniciativa);
  }

  getHistorial(urlIniciativa) {
    return new Promise((resolve, reject) => {
      this.http.get(urlIniciativa).subscribe(data => {
        this.iniciativas = data.json();
        this.iniciativas = this.iniciativas.Iniciativas;
        this.loader.dismiss();
      });
    })
  }

  mostrarIniciativa(iniciativa) {
    var objeto = { valor: 1, iniciativa: iniciativa };
    this.navCtrl.push('IniciativaInfoPage', objeto);
  }

}
