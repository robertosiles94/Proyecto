import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
  idIniciativa: any;
  idUsuario: any;
  public valor: any;
  URLGlobal: any = 'http://bigwasi.org/Bigwasi/';

  constructor(public plt: Platform, public http: Http) {
    this.getIniciativas().then((data) => {
      this.iniciativas = data;
    });
    this.data = {};
  }

  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  obtenerURLGlobal() {
    return this.URLGlobal;
  }

  setIdUsuario(id) {
    this.idUsuario = id;
  }

  getIdUsuario() {
    return this.idUsuario;
  }

  setIdIniciativa(id) {
    this.idIniciativa = id;
  }

  getIdIniciativa() {
    return this.idIniciativa;
  }

  getPlataforma() {
    var result = "";
    if (this.plt.is('ios') || this.plt.is('android')) {
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
    this.http.post(link + "?idIniciativa=" + objetoComentario.idIniciativa + "&idUsuario=" + this.getCookie("usuario") + "&comentario=" + objetoComentario.comentario + "&puntos=[" + objetoComentario.puntos + "]", objetoComentario, { headers: headers }).map(res => res.json())
      .subscribe(data => {
        this.valor = data.idComentario;
        console.log(data);
      }, error => {
        console.log("error");
      });
  }

  subirLike(idIniciativa) {
    let headers = new Headers();
    let body = { idIniciativa: idIniciativa, idUsuario: this.getCookie("usuario") };
    headers.append('Content-Type', 'text/plain');
    this.http.post(this.URLGlobal + 'Iniciativa/Like' + "?idIniciativa=" + idIniciativa + "&idUsuario=" + this.getCookie("usuario"), body, { headers: headers }).map(res => res.json())
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log("error");
      });
  }

  registrarUsuario(usuario) {
    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.URLGlobal + 'Usuario/Registro?email=' + usuario.email + '&nombreCompleto=' + usuario.nombreCompleto + '&telefono='
      + usuario.telefono + '&password=' + usuario.password, usuario, options).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
