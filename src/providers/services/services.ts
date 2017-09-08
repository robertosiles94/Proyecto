import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
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
  constructor(public plt: Platform) {
    
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

}
