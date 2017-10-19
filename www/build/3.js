webpackJsonp([3],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, modalCtrl, services, http, formBuilder, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.services = services;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.formLogin = this.createLoginForm();
    }
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.registrarse = function () {
        var profileModal = this.modalCtrl.create('CrearCuentaPage');
        profileModal.present();
        this.dismiss();
    };
    LoginPage.prototype.createLoginForm = function () {
        return this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
    };
    LoginPage.prototype.onEnter = function (event) {
        if (event.key == 'Enter') {
            this.login();
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'text/plain');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.services.URLGlobal + 'Usuario/Login?usuarioEmail=' + _this.correo + '&password=' + _this.contrasena, options).subscribe(function (data) {
                if (data.json().estado != "3") {
                    _this.profile = data.json();
                    if (_this.profile.estado == "0") {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Inicio de sesión',
                            subTitle: 'Ingreso con éxito. Bienvenido: ' + _this.profile.nombre,
                            buttons: ['Aceptar']
                        });
                        alert_1.present().then(function (response) {
                            document.cookie = "usuario" + "=" + _this.profile.idUsuario;
                            document.cookie = "nombre" + "=" + _this.profile.nombre;
                            document.cookie = "telefono" + "=" + _this.profile.telefono;
                            document.cookie = "email" + "=" + _this.profile.email;
                            //window.location.reload();
                            _this.navCtrl.push('IniciativasPage');
                            //this.app.setRoot('IniciativasPage');
                        });
                    }
                    else {
                        window.location.href = "http://bigwasi.org/Bigwasi/";
                    }
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'El correo no es válido o la contraseña es incorrecta.',
                        buttons: ['Aceptar']
                    });
                    alert_2.present();
                }
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\login\login.html"*/'<ion-content padding>\n\n  <br>\n\n  <h1 class="titulo">Iniciar Sesión</h1>\n\n  <form [formGroup]="formLogin">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Correo electrónico</ion-label>\n\n        <ion-input type="email" [(ngModel)]="correo" formControlName="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formLogin.get(\'email\').errors && formLogin.get(\'email\').dirty">\n\n        <p color="danger" ion-text *ngIf="formLogin.get(\'email\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input type="password" [(ngModel)]="contrasena" formControlName="password" id="txtPassword" (keyup)="onEnter($event)"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formLogin.get(\'password\').errors && formLogin.get(\'password\').dirty">\n\n        <p color="danger" ion-text *ngIf="formLogin.get(\'password\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <br>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button outline round class="posicionar-doble texto-normal" (click)="dismiss()">Cancelar</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button outline round class="posicionar-doble texto-normal" type="submit" (click)="login()" block [disabled]="!formLogin.valid ">Iniciar Sesión</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n\n\n  <p class="recorrer-derecha">¿No tienes cuenta?\n\n    <button ion-button clear class="boton-registrar texto-normal" (click)="registrarse()">Regístrate</button>\n\n  </p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map