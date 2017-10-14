webpackJsonp([7],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialUsuarioPageModule", function() { return HistorialUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial_usuario__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistorialUsuarioPageModule = (function () {
    function HistorialUsuarioPageModule() {
    }
    return HistorialUsuarioPageModule;
}());
HistorialUsuarioPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__historial_usuario__["a" /* HistorialUsuarioPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historial_usuario__["a" /* HistorialUsuarioPage */]),
        ],
    })
], HistorialUsuarioPageModule);

//# sourceMappingURL=historial-usuario.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
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
 * Generated class for the HistorialUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistorialUsuarioPage = (function () {
    function HistorialUsuarioPage(navCtrl, navParams, services, http, loadingCtrl, alertCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.services = services;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.categoriaSelecionada = "Todos";
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
    HistorialUsuarioPage.prototype.ionViewDidLoad = function () {
        this.loader = this.loadingCtrl.create({
            content: "Obteniendo las Iniciativas..."
        });
        this.loader.present();
        var index = this.services.getCookie("usuario");
        var urlIniciativa = this.services.obtenerURLGlobal() + 'Iniciativa/GetIniciativasUsuario/' + index;
        this.getHistorial(urlIniciativa);
        this.getCategorias();
    };
    HistorialUsuarioPage.prototype.getCategorias = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.services.obtenerURLGlobal() + 'Categoria/WSListaCategorias').subscribe(function (data) {
                _this.categorias = data.json().Categorias;
            });
        });
    };
    HistorialUsuarioPage.prototype.getItems = function (ev) {
        this.listaVisible = this.iniciativas;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.listaVisible = this.iniciativas.filter(function (item) {
                return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HistorialUsuarioPage.prototype.onSelectChange = function (event) {
        if (this.categoriaSelecionada == "Todos") {
            this.listaVisible = this.iniciativas;
        }
        else {
            this.cargarCategoria(event);
        }
    };
    HistorialUsuarioPage.prototype.cargarCategoria = function (categoria) {
        if (categoria != "") {
            this.listaVisible = [];
            for (var i = 0; i < this.iniciativas.length; i++) {
                if (this.iniciativas[i].Categoria == categoria) {
                    this.listaVisible.push(this.iniciativas[i]);
                }
            }
        }
    };
    HistorialUsuarioPage.prototype.getHistorial = function (urlIniciativa) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(urlIniciativa).subscribe(function (data) {
                _this.iniciativas = data.json();
                _this.iniciativas = _this.iniciativas.Iniciativas;
                _this.listaVisible = _this.iniciativas;
                _this.loader.dismiss();
            });
        });
    };
    HistorialUsuarioPage.prototype.mostrarIniciativa = function (iniciativa) {
        var objeto = { valor: 1, iniciativa: iniciativa };
        this.navCtrl.push('IniciativaInfoPage', objeto);
    };
    HistorialUsuarioPage.prototype.opcionesLogin = function () {
        var _this = this;
        if (this.nombreUsuario == 'Iniciar Sesión') {
            var profileModal = this.modal.create('LoginPage');
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
                            var perfilModal = _this.modal.create('PerfilPage');
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
    return HistorialUsuarioPage;
}());
HistorialUsuarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historial-usuario',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\historial-usuario\historial-usuario.html"*/'<!--\n\n  Generated template for the HistorialUsuarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="verde">\n\n      <ion-title>\n\n          <h2>BIGWASI - Mi Historial</h2>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="opcionesLogin()">\n\n              <ion-icon name="person" class="person-icon"></ion-icon>\n\n              <label>{{nombreUsuario}}</label>\n\n            </button>\n\n          </ion-buttons>\n\n        <ion-buttons left class="iconos">\n\n          <button ion-button icon-only (click)="paginaInformacion()">\n\n                <img src="img/logo1.png" class="imagen">\n\n            </button>\n\n        </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="fondo">\n\n  <ion-row>\n\n    <ion-col col-8>\n\n      <ion-searchbar (ionInput)="getItems($event)" placeholder="Buscar Iniciativa..." class="buscador">\n\n      </ion-searchbar>\n\n    </ion-col>\n\n    <ion-col col-4>\n\n      <ion-label class="titutloCategoria"><b>Categoria:</b></ion-label>\n\n      <ion-select [(ngModel)]="categoriaSelecionada" (ionChange)="onSelectChange($event)" class="seleccion">\n\n        <ion-label>Categoria</ion-label>\n\n        <ion-option value="Todos">Todos</ion-option>\n\n        <ion-option value="{{c}}" *ngFor="let c of categorias">{{c}}</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 *ngFor="let i of listaVisible">\n\n      <ion-card (click)="mostrarIniciativa(i)" class="card">\n\n        <img src="http://bigwasi.org/Bigwasi/images/Iniciativas/{{i.imagen}}">\n\n        <ion-card-header class="titulo" color="cafe">\n\n          {{i.titulo}}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p textwrap>{{i.descripcion}}</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\historial-usuario\historial-usuario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], HistorialUsuarioPage);

//# sourceMappingURL=historial-usuario.js.map

/***/ })

});
//# sourceMappingURL=7.js.map