webpackJsonp([5],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfografiaPageModule", function() { return InfografiaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infografia__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfografiaPageModule = (function () {
    function InfografiaPageModule() {
    }
    return InfografiaPageModule;
}());
InfografiaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__infografia__["a" /* InfografiaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infografia__["a" /* InfografiaPage */]),
        ],
    })
], InfografiaPageModule);

//# sourceMappingURL=infografia.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfografiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(193);
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
 * Generated class for the InfografiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InfografiaPage = (function () {
    function InfografiaPage(navCtrl, navParams, app, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.events = events;
    }
    InfografiaPage.prototype.ionViewDidLoad = function () {
    };
    InfografiaPage.prototype.paginaInformacion = function () {
        this.navCtrl.push('AcercaDePage');
    };
    InfografiaPage.prototype.opcionesLogin = function () {
        var profileModal = this.modalCtrl.create('LoginPage');
        profileModal.present();
    };
    InfografiaPage.prototype.registrarse = function () {
        var profileModal = this.modalCtrl.create('CrearCuentaPage');
        profileModal.present();
    };
    InfografiaPage.prototype.iniciativas = function () {
        this.navCtrl.push('IniciativasPage');
    };
    InfografiaPage.prototype.email = function () {
        alert("reportesbigwasi@gmail.com");
    };
    return InfografiaPage;
}());
InfografiaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-infografia',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\infografia\infografia.html"*/'<!--\n  Generated template for the InfografiaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="verde">\n    <ion-title>\n      <h2>BIGWASI - Pagina Principal</h2>\n    </ion-title>\n    <ion-buttons left class="iconos">\n      <button ion-button icon-only (click)="paginaInformacion()">\n        <img src="img/logo1.png" class="imagen">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="verde">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="paginaInformacion()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end class="iconos">\n      <a ion-button icon-only href="https://www.facebook.com/Bigwasi/">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </a>\n    </ion-buttons>\n    <ion-buttons end>\n      <a ion-button icon-only href="https://twitter.com/Bigwasi_Bolivia">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </a>\n    </ion-buttons>\n    <ion-buttons end>\n      <a ion-button icon-only href="https://www.instagram.com/bigwasi/">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </a>\n    </ion-buttons>\n    <ion-buttons end class="iconos">\n      <a ion-button icon-only href="https://www.youtube.com/channel/UC_1EzIo9YlyGI3TNy9NGEPg">\n        <ion-icon name="logo-youtube"></ion-icon>\n      </a>\n    </ion-buttons>\n    <ion-buttons end class="iconos">\n      <a ion-button icon-only (click)="email()">\n        <ion-icon name="mail"></ion-icon>\n      </a>\n    </ion-buttons>\n    <ion-title>BigWasi es una plataforma virtual para compartir datos útiles de tu ciudad, tu barrio o comunidad.</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class="fondo">\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4>\n      <ion-card>\n        <div>\n          <ion-item>\n            <ion-icon name="contact" item-start></ion-icon>\n            <h2 text-wrap>\n              <b>Nuevo</b>\n            </h2>\n          </ion-item>\n        </div>\n        <div class="reportar">\n          <p>Quieres reportar?</p>\n          <button ion-button (click)="registrarse()">Registrate</button>\n        </div>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4>\n      <ion-card>\n        <div>\n          <ion-item>\n            <ion-icon name="contact" item-start></ion-icon>\n            <h2 text-wrap>\n              <b>Usuario Bigwasi</b>\n            </h2>\n          </ion-item>\n        </div>\n        <div class="reportar">\n          <p>Ya tienes cuenta?</p>\n          <button ion-button (click)="opcionesLogin()">Iniciar Sesion</button>\n        </div>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4>\n      <ion-card>\n        <div>\n          <ion-item>\n            <ion-icon name="contact" item-start></ion-icon>\n            <h2 text-wrap>\n              <b>Visitante</b>\n            </h2>\n          </ion-item>\n        </div>\n        <div class="reportar">\n          <p>Quieres ver las iniciativas?</p>\n          <button ion-button (click)="iniciativas()">Iniciativas</button>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <div>\n    <img src="img/imagen1.png" class="imagenBigwasi">\n    <img src="img/imagen2.png" class="imagenBigwasi2">\n    <img src="img/imagen3.png" class="imagenBigwasi2">\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\infografia\infografia.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], InfografiaPage);

//# sourceMappingURL=infografia.js.map

/***/ })

});
//# sourceMappingURL=5.js.map