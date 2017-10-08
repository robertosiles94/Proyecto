import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  idComentario: any;
  public files: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private services: ServicesProvider) {
    setTimeout(() => {
      this.idComentario = this.services.valor;
    }, 2000);

  }
  closeModal() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
