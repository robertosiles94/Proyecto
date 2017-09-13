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
  titulo: string;
  descripcion: string;
  idInicitiva: any;
  imagen: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser, private services: ServicesProvider) {
    this.dispositivo = this.services.getPlataforma() == "web"? false: true;
    this.titulo = this.navParams.get("titulo");
    this.descripcion = this.navParams.get("descripcion");
    this.idInicitiva = this.navParams.get("idIniciativa");
    this.imagen = this.navParams.get("imagen");
    this.comentarios = this.navParams.get("Comentarios");
    this.comentariosTotal = this.comentarios.length;
  }

  ionViewDidLoad() {
    this.initMap();
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

  subirComentario() {
    this.services.subirComentario({idIniciativa: this.idInicitiva, comentario: this.comentario});
  }
}
