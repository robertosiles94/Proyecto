webpackJsonp([10],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaDePageModule", function() { return AcercaDePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acerca_de__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AcercaDePageModule = (function () {
    function AcercaDePageModule() {
    }
    return AcercaDePageModule;
}());
AcercaDePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__acerca_de__["a" /* AcercaDePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__acerca_de__["a" /* AcercaDePage */]),
        ],
    })
], AcercaDePageModule);

//# sourceMappingURL=acerca-de.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaDePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(192);
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
 * Generated class for the AcercaDePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AcercaDePage = (function () {
    function AcercaDePage(navCtrl, alertCtrl, navParams, modalCtrl, events, services) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.services = services;
        this.nombreUsuario = 'Iniciar Sesión';
        var usuario = this.services.getCookie("usuario");
        if (usuario == "" || usuario == "0") {
            this.esUsuario = false;
            this.nombreUsuario = 'Iniciar Sesión';
        }
        else {
            this.nombreUsuario = this.services.getCookie("nombre");
            this.esUsuario = true;
        }
        this.correo = this.services.getCookie("email");
        this.telefono = this.services.getCookie("telefono");
    }
    AcercaDePage.prototype.opcionesLogin = function () {
        var _this = this;
        if (this.nombreUsuario == 'Iniciar Sesión') {
            var profileModal = this.modalCtrl.create('LoginPage');
            profileModal.present();
        }
        else {
            if (this.telefono == 'undefine') {
                this.telefono = "N/A";
            }
            var alert_1 = this.alertCtrl.create({
                title: 'Datos Usuario',
                subTitle: 'Nombre: ' + this.nombreUsuario + '<br>Correo: ' + this.correo + '<br>Teléfono: ' + this.telefono,
                buttons: [
                    {
                        text: 'Modificar',
                        handler: function () {
                            var perfilModal = _this.modalCtrl.create('PerfilPage');
                            perfilModal.present();
                        }
                    },
                    {
                        text: 'Cerrar Sesión',
                        handler: function () {
                            _this.nombreUsuario = 'Iniciar Sesión';
                            document.cookie = "usuario" + "=" + 0;
                            document.cookie = "nombre" + "=" + '';
                            document.cookie = "telefono" + "=" + '';
                            document.cookie = "email" + "=" + '';
                            document.cookie = "iniciativa" + "=" + '';
                            _this.navCtrl.push('IniciativasPage');
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    return AcercaDePage;
}());
AcercaDePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-acerca-de',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\acerca-de\acerca-de.html"*/'<!--\n\n  Generated template for the AcercaDePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="verde">\n\n    <ion-title>\n\n      <h2>BIGWASI - AcercaDe</h2>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="opcionesLogin()">\n\n          <ion-icon name="person" class="person-icon"></ion-icon>\n\n          <label>{{nombreUsuario}}</label>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-buttons left class="iconos">\n\n      <button ion-button icon-only (click)="paginaInformacion()">\n\n            <img src="img/logo1.png" class="imagen">\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar color="verde">\n\n      <ion-buttons end>\n\n        <a ion-button icon-only href="https://www.facebook.com/Bigwasi/">\n\n          <ion-icon name="logo-facebook"></ion-icon>\n\n        </a>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <a ion-button icon-only href="https://twitter.com/Bigwasi_Bolivia">\n\n          <ion-icon name="logo-twitter"></ion-icon>\n\n        </a>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <a ion-button icon-only href="https://www.instagram.com/bigwasi/">\n\n          <ion-icon name="logo-instagram"></ion-icon>\n\n        </a>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <a ion-button icon-only href="https://www.youtube.com/channel/UC_1EzIo9YlyGI3TNy9NGEPg">\n\n          <ion-icon name="logo-youtube"></ion-icon>\n\n        </a>\n\n      </ion-buttons>\n\n      <ion-buttons end class="iconos">\n\n        <a ion-button icon-only (click)="email()">\n\n          <ion-icon name="mail"></ion-icon>\n\n        </a>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fondo">\n\n    <img src="img/logo1.png" class="imagenLogo">\n\n    <h2>¿Qué es BigWasi?</h2>\n\n    <p>\n\n      BigWasi es una plataforma virtual para compartir datos útiles de tu ciudad, tu barrio o comunidad.\n\n    </p>\n\n    <p>\n\n      Desde BigWasi, la “casa grande”, la casa de los datos, buscamos mejorar nuestro hábitat de manera colaborativa compartiendo información sobre medioambiente, servicios básicos, situación de la vivienda, situación de la ciudad y mucha más información que sea útil tanto al mismo ciudadano como a las autoridades y profesionales en la construcción de soluciones a problemas como la contaminación o el caos urbano.\n\n    </p>\n\n    <h2>¿Cómo funciona?</h2>\n\n    <p>\n\n      Te invitamos a registrarte aquí:\n\n    </p>\n\n      <a (click)="opcionesLogin()">Registrate aqui</a>\n\n      <p>\n\n      Si tienes información que compartir sobre tu barrio o comunidad lo único que tienes que hacer es marcar el punto en el mapa y escribir brevemente lo que quieres REPORTAR, puedes acompañar una foto y/o archivos adjuntos dependiendo la información que compartas.\n\n      \n\n      Te sugerimos que uses las temáticas planteadas a través de las INICIATIVAS que ya están en la plataforma o que sugieras una nueva iniciativa al correo <a>bigwasi@fundacionprohabitat.org</a>\n\n      \n\n      También puedes etiquetar tu REPORTE con un hashtag o CONFIRMAR un reporte con un like!\n\n    </p>\n\n    <h2>\n\n        ¿Quiénes participan?\n\n    </h2>\n\n    <p>\n\n        Vecinos de todas partes de la ciudad. Profesionales, autoridades, instituciones, en fin, todos quienes quieran trabajar de manera colaborativa en REPORTAR datos de interés que contribuyan a resolver los problemas de nuestro hábitat.\n\n    </p>\n\n    <h2>¿Qué hacer con los datos obtenidos?</h2>\n\n    <p>\n\n        El conjunto de reportes nos permitirá conocer la situación sobre el hábitat en el que vivimos, así podremos proponer a las autoridades locales y otras instituciones que atiendan las necesidades de la población en función a información obtenida de manera colaborativa.\n\n        \n\n        Mientras más precisos y objetivos sean los reportes, las propuestas de soluciones a las problemáticas del hábitat serán mejor desarrolladas.\n\n    </p>\n\n    <h2>¿De qué otra manera puedo contribuir a la iniciativa?</h2>\n\n    <p>\n\n        Si deseas contribuir en el procesamiento de los reportes, su difusión o el fortalecimiento de la iniciativa, te invitamos a unirte a nuestro equipo, contáctanos:\n\n        \n\n        Correos de contacto: <a>bigwasi@fundacionprohabitat.org</a>\n\n        \n\n        Dirección: calle Hamiraya esquina México N° 511, Cochabamba-Bolivia\n\n        \n\n        Teléfonos: (591) 4 4524859 – 4528146\n\n        \n\n        Casilla postal: N° 2751\n\n        \n\n         \n\n        \n\n        Desde BigWasi, queremos contribuir a lograr un hábitat sostenible y queremos que sean parte de este reto. Bienvenidos!\n\n        \n\n         \n\n        \n\n        Esta iniciativa es impulsada por:\n\n    </p>\n\n    <img src="img/logo2.png" class="imagenLogo">\n\n    <p>\n\n        Con el patrocinio de:\n\n    </p>\n\n    <img src="img/logo3.png" class="imagenLogo3">\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\acerca-de\acerca-de.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */]])
], AcercaDePage);

//# sourceMappingURL=acerca-de.js.map

/***/ })

});
//# sourceMappingURL=10.js.map