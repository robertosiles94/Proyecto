import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.iniciativas = [
      { autor:"Usuario 1", titulo:"Titulo 1", imagen:"img/imagen.jpg", likes:"3", comentarios:"4" },
      { autor:"Usuario 2", titulo:"Titulo 2", imagen:"img/imagen.jpg", likes:"5", comentarios:"7" },
      { autor:"Usuario 3", titulo:"Titulo 3", imagen:"img/imagen.jpg", likes:"7", comentarios:"9" },
      { autor:"Usuario 4", titulo:"Titulo 4", imagen:"img/imagen.jpg", likes:"1", comentarios:"8" },
      { autor:"Usuario 5", titulo:"Titulo 5", imagen:"img/imagen.jpg", likes:"6", comentarios:"2" },
      { autor:"Usuario 6", titulo:"Titulo 6", imagen:"img/imagen.jpg", likes:"2", comentarios:"3" },
      { autor:"Usuario 7", titulo:"Titulo 7", imagen:"img/imagen.jpg", likes:"5", comentarios:"4" },
      { autor:"Usuario 8", titulo:"Titulo 8", imagen:"img/imagen.jpg", likes:"5", comentarios:"5" },
      { autor:"Usuario 9", titulo:"Titulo 9", imagen:"img/imagen.jpg", likes:"6", comentarios:"7" },
      { autor:"Usuario 10", titulo:"Titulo 10", imagen:"img/imagen.jpg", likes:"3", comentarios:"9" },
      { autor:"Usuario 11", titulo:"Titulo 11", imagen:"img/imagen.jpg", likes:"1", comentarios:"13" },
    ];
  }

  mostrarIniciativa() {
    this.navCtrl.push('IniciativaInfoPage');
  }

  anadirIniciativa() {
    this.navCtrl.push('AñadirIniciativaPage');
  }

  getItems(ev: any) {
    this.ionViewDidLoad();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.iniciativas = this.iniciativas.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
