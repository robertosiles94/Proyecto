import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { ServicesProvider } from '../../providers/services/services'; 

/**
 * Generated class for the IniciativaInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-iniciativa-info',
  templateUrl: 'iniciativa-info.html',
})
export class IniciativaInfoPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  comentarios:any;
  comentario: string = "";
  likes:string = "3";
  comentariosTotal:string = "7";
  dispositivo: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser, private services: ServicesProvider) {
    this.dispositivo = this.services.getPlataforma() == "web"? false: true;
  }

  ionViewDidLoad() {
    this.initMap();
    this.comentarios = [
      { usuario: "Usuario 1", avatar: "img/avatar.jpg", comentario:"Comentario 1" },
      { usuario: "Usuario 2", avatar: "img/avatar.jpg", comentario:"Comentario 2" },
      { usuario: "Usuario 3", avatar: "img/avatar.jpg", comentario:"Comentario 3" },
      { usuario: "Usuario 4", avatar: "img/avatar.jpg", comentario:"Comentario 4" },
      { usuario: "Usuario 5", avatar: "img/avatar.jpg", comentario:"Comentario 5" }
    ];
  }

  initMap() {
    let latLng = new google.maps.LatLng(-17.393835, -66.156946);
    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    marker.setMap(this.map);
  }

  abrirArchivos() {
    this.fileChooser.open()
    .then(uri => console.log(uri))
    .catch(e => console.log(e));
  }

  comentarIniciativa() {
    if(this.comentario != "")
      this.comentarios.push({ usuario: "Usuario 1", avatar: "img/avatar.jpg", comentario: this.comentario });
    this.comentario = "";
  }
}
