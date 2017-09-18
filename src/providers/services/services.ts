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
  URLGlobal: any = 'http://bigwasi.org/Bigwasi/';

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
      this.http.get(this.URLGlobal + 'Iniciativa/GetIniciativas').subscribe(data => {
        this.iniciativas = data.json();
      });
    })
  }

  obtenerIniciativas() {
    return this.iniciativas;
  }

  subirComentario(objetoComentario) {
    console.log(objetoComentario.puntos);
    var link = this.URLGlobal + 'Comentario/Registar';
    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    this.http.post(link + "?idIniciativa="+objetoComentario.idIniciativa + "&comentario=" + objetoComentario.comentario + "&puntos=["+ objetoComentario.puntos + "]", objetoComentario,{ headers: headers}).map(res => res.json())
    .subscribe(data => {
        console.log(data);
    }, error => {
        console.log("error");
    });
  }

  subirLike(idIniciativa) {
    let headers = new Headers();
    let body = {idIniciativa: idIniciativa};
    headers.append('Content-Type', 'text/plain');
    this.http.post(this.URLGlobal + 'Iniciativa/Like' + "?idIniciativa="+idIniciativa, body, { headers: headers}).map(res => res.json())
    .subscribe(data => {
        console.log(data);
    }, error => {
        console.log("error");
    });
  }
}
