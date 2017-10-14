webpackJsonp([1],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = (function () {
    function PerfilPageModule() {
    }
    return PerfilPageModule;
}());
PerfilPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
        ],
    })
], PerfilPageModule);

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, viewCtrl, alertCtrl, formBuilder, services, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.services = services;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.formRegister = this.createRegisterForm();
        this.id = this.services.getCookie("usuario");
        this.nombre = this.services.getCookie("nombre");
        this.telefono = this.services.getCookie("telefono");
        if (this.telefono == 'undefine') {
            this.telefono = "";
        }
    }
    PerfilPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PerfilPage.prototype.createRegisterForm = function () {
        return this.formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^([A-Za-záéíóú ])+$')]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^([4]{1}[0-9]{6})$|^([6-7]{1}[0-9]{7})$')]]
        });
    };
    PerfilPage.prototype.editarUsuario = function () {
        var _this = this;
        var usuario = {
            id: this.id, nombreCompleto: this.nombre, telefono: this.telefono
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'text/plain');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.services.URLGlobal + 'Usuario/EditarDatos?idUsuario=' + usuario.id + '&nombreCompleto=' + usuario.nombreCompleto +
            '&telefono=' + usuario.telefono, usuario, options)
            .subscribe(function (data) {
            if (data.json().succes == true) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Datos modificados',
                    subTitle: 'Los datos se modificaron correctamente',
                    buttons: [{
                            text: 'Aceptar',
                            handler: function () {
                                _this.dismiss();
                            }
                        }]
                });
                alert_1.present();
                document.cookie = "nombre" + "=" + usuario.nombreCompleto;
                document.cookie = "telefono" + "=" + usuario.telefono;
                _this.navCtrl.push('IniciativasPage');
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Error al modificar los datos, verique los campos y vuelva a intentarlo.',
                    buttons: ['Aceptar']
                });
                alert_2.present();
            }
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Error al modificar los datos, consulte con el personal de sistemas.',
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    PerfilPage.prototype.cambiarContrasena = function () {
        var profileModal = this.modalCtrl.create('CambiarContrasenaPage');
        profileModal.present();
        this.dismiss();
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\perfil\perfil.html"*/'<ion-content padding>\n\n  <h1 class="titulo">Editar datos personales</h1>\n\n  <form [formGroup]="formRegister">\n\n    <ion-list class="subir-lista">\n\n      <ion-item>\n\n        <ion-label floating>Nombre completo: </ion-label>\n\n        <ion-input type="text" [(ngModel)]="nombre" required formControlName="nombre"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'nombre\').errors && formRegister.get(\'nombre\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'nombre\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'nombre\').hasError(\'pattern\')">\n\n          Solo se aceptan letras sin caracteres especiales.\n\n        </p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Teléfono: </ion-label>\n\n        <ion-input type="text" [(ngModel)]="telefono" formControlName="telefono"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'telefono\').errors && formRegister.get(\'telefono\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'telefono\').hasError(\'pattern\')">\n\n          Solo se aceptan teléfonos fijos (7 dígitos) o celulares (8 dígitos).\n\n        </p>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <br>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button outline round class="texto-normal" (click)="dismiss()">Cancelar</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button outline round class="texto-normal" (click)="cambiarContrasena()">Cambiar contraseña</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button outline round class="texto-normal" (click)="editarUsuario()" type="submit" block [disabled]="!formRegister.valid ">Guardar</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=1.js.map