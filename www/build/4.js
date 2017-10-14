webpackJsonp([4],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciativasPageModule", function() { return IniciativasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iniciativas__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IniciativasPageModule = (function () {
    function IniciativasPageModule() {
    }
    return IniciativasPageModule;
}());
IniciativasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__iniciativas__["a" /* IniciativasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__iniciativas__["a" /* IniciativasPage */]),
        ],
    })
], IniciativasPageModule);

//# sourceMappingURL=iniciativas.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciativasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(192);
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
 * Generated class for the IniciativasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IniciativasPage = (function () {
    function IniciativasPage(navCtrl, http, navParams, services, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.services = services;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.categoriaSelecionada = "Todos";
        this.nombreUsuario = 'Iniciar Sesión';
        this.titulo = "Iniciativas";
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
    IniciativasPage.prototype.getIniciativas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativas').subscribe(function (data) {
                _this.iniciativas = data.json().Iniciativas;
                _this.listaVisible = _this.iniciativas;
                _this.loader.dismiss();
            });
        });
    };
    IniciativasPage.prototype.getCategorias = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.services.obtenerURLGlobal() + 'Categoria/WSListaCategorias').subscribe(function (data) {
                _this.categorias = data.json().Categorias;
            });
        });
    };
    IniciativasPage.prototype.ionViewDidLoad = function () {
        this.cargarIniciativas();
        this.getCategorias();
    };
    IniciativasPage.prototype.obtenerCategorias = function () {
        var _this = this;
        this.getCategorias().then(function (data) {
            _this.categorias = data;
        });
    };
    IniciativasPage.prototype.cargarIniciativas = function () {
        this.loader = this.loadingCtrl.create({
            content: "Obteniendo las Iniciativas..."
        });
        this.loader.present();
        this.getIniciativas();
    };
    IniciativasPage.prototype.mostrarIniciativa = function (iniciativa) {
        document.cookie = "iniciativa" + "=" + iniciativa.idIniciativa;
        this.services.setIdIniciativa(iniciativa.idIniciativa);
        var objeto = { valor: 0 };
        this.navCtrl.push('IniciativaInfoPage', objeto);
    };
    IniciativasPage.prototype.mostrarIniciativaUsuario = function () {
        this.navCtrl.push('HistorialUsuarioPage');
    };
    IniciativasPage.prototype.anadirIniciativa = function () {
        this.navCtrl.push('AñadirIniciativaPage');
    };
    IniciativasPage.prototype.getItems = function (ev) {
        this.listaVisible = this.iniciativas;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listaVisible = this.iniciativas.filter(function (item) {
                return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    IniciativasPage.prototype.refrescarInicitavivas = function () {
        this.cargarIniciativas();
    };
    IniciativasPage.prototype.paginaInformacion = function () {
        this.navCtrl.push('AcercaDePage');
    };
    IniciativasPage.prototype.onSelectChange = function (event) {
        if (this.categoriaSelecionada == "Todos") {
            this.listaVisible = this.iniciativas;
        }
        else {
            this.cargarCategoria(event);
        }
    };
    IniciativasPage.prototype.cargarCategoria = function (categoria) {
        if (categoria != "") {
            this.listaVisible = [];
            for (var i = 0; i < this.iniciativas.length; i++) {
                if (this.iniciativas[i].Categoria == categoria) {
                    this.listaVisible.push(this.iniciativas[i]);
                }
            }
        }
    };
    IniciativasPage.prototype.darLike = function (iniciativa) {
        this.services.subirLike(iniciativa.idIniciativa);
    };
    IniciativasPage.prototype.opcionesLogin = function () {
        var _this = this;
        if (this.nombreUsuario == 'Iniciar Sesión') {
            var profileModal = this.modalCtrl.create('LoginPage');
            profileModal.present();
        }
        else {
            if (this.telefono == 'undefine' || this.telefono == '') {
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
                            window.location.reload();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    return IniciativasPage;
}());
IniciativasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-iniciativas',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\iniciativas\iniciativas.html"*/'<ion-header>\n\n  <ion-navbar color="verde">\n\n    <ion-title>\n\n      <h2>BIGWASI - Iniciativas</h2>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="refrescarInicitavivas()">\n\n          <ion-icon name="refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="paginaInformacion()">\n\n          <ion-icon name="information-circle"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="opcionesLogin()">\n\n        <ion-icon name="person" class="person-icon"></ion-icon>\n\n        <label>{{nombreUsuario}}</label>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left class="iconos">\n\n      <button ion-button icon-only (click)="paginaInformacion()">\n\n        <img src="img/logo1.png" class="imagen">\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar color="verde">\n\n    <ion-buttons end>\n\n      <a ion-button icon-only href="https://www.facebook.com/Bigwasi/">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n      </a>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <a ion-button icon-only href="https://twitter.com/Bigwasi_Bolivia">\n\n        <ion-icon name="logo-twitter"></ion-icon>\n\n      </a>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <a ion-button icon-only href="https://www.instagram.com/bigwasi/">\n\n        <ion-icon name="logo-instagram"></ion-icon>\n\n      </a>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <a ion-button icon-only href="https://www.youtube.com/channel/UC_1EzIo9YlyGI3TNy9NGEPg">\n\n        <ion-icon name="logo-youtube"></ion-icon>\n\n      </a>\n\n    </ion-buttons>\n\n    <ion-buttons end class="iconos">\n\n      <a ion-button icon-only (click)="email()">\n\n        <ion-icon name="mail"></ion-icon>\n\n      </a>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="fondo">\n\n  <ion-row>\n\n    <ion-col col-8>\n\n      <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar Iniciativa..." class="buscador">\n\n      </ion-searchbar>\n\n    </ion-col>\n\n    <ion-col col-4>\n\n      <ion-label class="titutloCategoria">\n\n        <b>Categoria:</b>\n\n      </ion-label>\n\n      <ion-select [(ngModel)]="categoriaSelecionada" (ionChange)="onSelectChange($event)" class="seleccion">\n\n        <ion-label>Categoria</ion-label>\n\n        <ion-option value="Todos">Todos</ion-option>\n\n        <ion-option value="{{c}}" *ngFor="let c of categorias">{{c}}</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-label class="categoriaTitulo">\n\n    <b>Categoria Seleccionada: </b>{{categoriaSelecionada}}</ion-label>\n\n  <ion-row>\n\n    <ion-col col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 *ngIf="esUsuario">\n\n      <ion-card (click)="mostrarIniciativaUsuario()" class="card">\n\n        <img src="img/IniciativaPerfil.png">\n\n        <ion-card-header class="titulo" color="cafe">\n\n          Mi Historial\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p textwrap>Iniciativas en las cuales se hizo reportes.</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 *ngFor="let i of listaVisible">\n\n      <ion-card (click)="mostrarIniciativa(i)" class="card">\n\n        <img src="http://bigwasi.org/Bigwasi/images/Iniciativas/{{i.imagen}}">\n\n        <ion-card-header color="cafe">\n\n          <b text-wrap>\n\n            {{i.titulo}}\n\n          </b>\n\n        </ion-card-header>\n\n        <ion-scroll scrollX="true" class="descripcion">\n\n          {{i.descripcion}}\n\n        </ion-scroll>\n\n        <ion-row>\n\n          <ion-col col-6 style="padding: 5px;">\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <div>{{i.likes}}</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6 style="padding: 5px;">\n\n            <button ion-button icon-left clear small (click)="darLike(i)">\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>{{i.NroComentarios}}</div>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-fab bottom right (click)="anadirIniciativa()" *ngIf="false">\n\n    <button ion-fab>\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\iniciativas\iniciativas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], IniciativasPage);

//# sourceMappingURL=iniciativas.js.map

/***/ })

});
//# sourceMappingURL=4.js.map