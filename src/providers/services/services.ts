import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  plataforma: string;
  iniciativas: any;
  data: any;

  constructor(public plt: Platform, public http: Http) {
    this.getIniciativas().then((data) => {
      this.iniciativas = data;
    });
    this.data = {};
  }

  getPlataforma() {
    var result = "";
    if(this.plt.is('ios') || this.plt.is('android')) {
      result = "dispositivo";
    } else {
      result = "web";
    }
    return result;
  }

  getIniciativas() {
    return new Promise((resolve, reject) => {
      this.http.get('http://bigwasi.org/Iniciativa/GetIniciativas').subscribe(data => {
        this.iniciativas = data.json();
      });
    })
  }

  obtenerIniciativas() {
    return this.iniciativas;
  }

  subirComentario(objetoComentario) {
    var link = 'http://bigwasi.org/Comentario/Registar';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = {idIniciativa: objetoComentario.idIniciativa, comentario: objetoComentario.comentario }
    var data = JSON.stringify(body);
    this.http.post(link, body, { headers: headers}).map(res => res.json())
    .subscribe(data => {
        console.log(data);
    }, error => {
        console.log("Oooops!");
    });
  }
}
