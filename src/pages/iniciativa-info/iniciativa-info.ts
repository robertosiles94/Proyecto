import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { ServicesProvider } from '../../providers/services/services';
import { LatLng } from '@ionic-native/google-maps';
import { AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { ToastController } from 'ionic-angular';
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
  comentarios: any;
  comentario: string;
  likes: string;
  comentariosTotal: string;
  dispositivo: boolean;
  titulo: string;
  descripcion: string;
  idInicitiva: any;
  imagen: string;
  fecha: string;
  area: any;
  puntos: any;
  iniciativa: any;
  contadorMarcadores: number = 20;
  marcadoresLimite: number = 20;
  marcadoresUsuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private fileChooser: FileChooser, private services: ServicesProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.dispositivo = this.services.getPlataforma() == "web" ? false : true;
  }

  ionViewDidLoad() {
    this.initMap();
    if(this.navParams.data.valor === 1) {
      this.cargarIniciativaUsuario();
    } else {
      var index = this.services.getCookie("iniciativa");
      var urlIniciativa = this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativa/' + index;
      this.getIniciativa(urlIniciativa);
    }
  }

  cargarIniciativaUsuario() {
    this.titulo = this.navParams.data.iniciativa.titulo;
    this.descripcion = this.navParams.data.iniciativa.descripcion;
    this.idInicitiva = this.navParams.data.iniciativa.idIniciativa;
    this.imagen = this.navParams.data.iniciativa.imagen;
    this.comentarios = this.navParams.data.iniciativa.Comentarios;
    this.fecha = this.navParams.data.iniciativa.fecha;
    this.area = this.navParams.data.iniciativa.area;
    this.comentariosTotal = this.comentarios.length;
    this.likes = this.navParams.data.iniciativa.likes;
    this.puntos = this.navParams.data.iniciativa.puntos;
    this.cargarIniciativasDeComentariosMapa();
    this.marcadoresUsuario = [];
  }

  cargarIniciativa() {
    this.titulo = this.iniciativa.titulo;
    this.descripcion = this.iniciativa.descripcion;
    this.idInicitiva = this.iniciativa.idIniciativa;
    this.imagen = this.iniciativa.imagen;
    this.comentarios = this.iniciativa.Comentarios;
    this.fecha = this.iniciativa.fecha;
    this.area = this.iniciativa.area;
    this.comentariosTotal = this.comentarios.length;
    this.likes = this.iniciativa.likes;
    this.puntos = this.iniciativa.puntos;
    this.marcadoresUsuario = [];
  }

  getIniciativa(urlIniciativa) {
    return new Promise((resolve, reject) => {
      this.http.get(urlIniciativa).subscribe(data => {
        this.iniciativa = data.json();
        this.iniciativa = this.iniciativa.Iniciativa;
        this.cargarIniciativa();
        this.cargarIniciativaEnElMapa();
        this.cargarIniciativasDeComentariosMapa();
      });
    })
  }

  initMap() {
    let latLng = new google.maps.LatLng(-17.393835, -66.156946);
    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    google.maps.event.addListener(this.map, 'click', e => {
      this.clickMapa(e);
      this.concatenarMarcadores();
    });
  }

  clickMapa(punto) {
    if (this.contadorMarcadores > 0) {
      var marker = new google.maps.Marker({
        position: punto.latLng,
        map: this.map
      });
      this.map.panTo(punto.latLng);
      this.marcadoresUsuario.push(marker);
      this.disminuirMarcadores();
      marker.addListener('click', () => {
        this.mensajeEliminaMarcador(marker);
      });
    }
  }

  mensajeEliminaMarcador(marcador) {
    let prompt = this.alertCtrl.create({
      title: 'Eliminar Punto',
      message: "Desea eliminar este punto del mapa?",
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Eliminar',
          handler: data => {
            marcador.setMap(null);
            this.removerMarcadorDeUsuario(marcador);
            this.contadorMarcadores++;
          }
        }
      ]
    });
    prompt.present();
  }

  removerMarcadorDeUsuario(marcador) {
    var index = this.marcadoresUsuario.indexOf(marcador);
    this.marcadoresUsuario.splice(index, 1);
  }

  disminuirMarcadores() {
    this.contadorMarcadores--;
  }

  removerTodosLosMarcadores() {
    for (let i = 0; i < this.marcadoresUsuario.length; i++) {
      this.marcadoresUsuario[i].setMap(null);
    }
    this.marcadoresLimite = 20;
  }

  subirComentario() {
    if (this.comentario != "") {
      var puntos = this.concatenarMarcadores();
      this.services.subirComentario({ idIniciativa: this.idInicitiva, comentario: this.comentario, puntos: puntos });
      this.removerTodosLosMarcadores();
      this.marcadoresUsuario = [];    
      this.mensajeEnviado(); 
    }
    this.comentario = "";
  }

  concatenarMarcadores() {
    var cadena = "";
    if (this.marcadoresUsuario.length > 0) {
      cadena = "{ lat:" + this.marcadoresUsuario[0].position.lat() + ", lng:" + this.marcadoresUsuario[0].position.lng() + "}";
    }
    for (let i = 1; i < this.marcadoresUsuario.length; i++) {
      cadena += ",";
      cadena += "{ lat:" + this.marcadoresUsuario[i].position.lat() + ", lng:" + this.marcadoresUsuario[i].position.lng() + "}";
    }
    return cadena;
  }

  subirArchivo() {

  }

  darLike() {
    this.services.subirLike(this.idInicitiva);
  }

  cargarIniciativasDeComentariosMapa() {
    for (let i = 0; i < this.comentarios.length; i++) {
      if (this.comentarios[i].area == 0) {
        this.graficarPuntosiniciativaEnMapa(this.comentarios[i].Puntos);
      } else {
        this.graficarAreainiciativaEnMapa(this.comentarios[i].Puntos);
      }
    }
  }

  cargarIniciativaEnElMapa() {
    if (this.area == 0) {
      this.graficarPuntosiniciativaEnMapa(this.puntos);
    } else {
      this.graficarAreainiciativaEnMapa(this.puntos);
    }
  }

  graficarPuntosiniciativaEnMapa(marcadores) {
    for (let i = 0; i < marcadores.length; i++) {
      let marcador: LatLng = new LatLng(marcadores[i].lat, marcadores[i].lng);
      var marker = new google.maps.Marker({
        position: marcador,
        map: this.map
      });
      marker.setMap(this.map);
    }
  }

  graficarAreainiciativaEnMapa(puntos) {
    var covertura = new google.maps.Polygon({
      path: puntos,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    covertura.setMap(this.map);
  }

  mensajeEnviado() {
    let toast = this.toastCtrl.create({
      message: 'Gracias por contribuir a esta iniciativa, tu reporte sera procesado.',
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }
}
