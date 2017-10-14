webpackJsonp([9],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarContrasenaPageModule", function() { return CambiarContrasenaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cambiar_contrasena__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CambiarContrasenaPageModule = (function () {
    function CambiarContrasenaPageModule() {
    }
    return CambiarContrasenaPageModule;
}());
CambiarContrasenaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cambiar_contrasena__["a" /* CambiarContrasenaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cambiar_contrasena__["a" /* CambiarContrasenaPage */]),
        ],
    })
], CambiarContrasenaPageModule);

//# sourceMappingURL=cambiar-contrasena.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambiarContrasenaPage; });
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
 * Generated class for the CambiarContrasenaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CambiarContrasenaPage = (function () {
    function CambiarContrasenaPage(navCtrl, navParams, viewCtrl, formBuilder, services, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.services = services;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.formRegister = this.createRegisterForm();
        this.id = this.services.getCookie("usuario");
    }
    CambiarContrasenaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CambiarContrasenaPage.prototype.createRegisterForm = function () {
        return this.formBuilder.group({
            contrasenaAntigua: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            confirmarContrasena: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    };
    CambiarContrasenaPage.prototype.cambiarContrasena = function () {
        var _this = this;
        var usuario = {
            id: this.id, oldPassword: this.antiguaContrasena, newPassword: this.contrasena
        };
        if (this.contrasena == this.confirmContrasena) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'text/plain');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(this.services.URLGlobal + 'Usuario/EditarPassword?idUsuario=' + usuario.id + '&password=' + usuario.oldPassword +
                '&NewPassword=' + usuario.newPassword, usuario, options)
                .subscribe(function (data) {
                console.log(data);
                if (data.json().succesPassword == true) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Contraseña modificada',
                        subTitle: 'La contraseña se modificó correctamente, su sesión se cerrará para aplicar los cambios.',
                        buttons: [{
                                text: 'Aceptar',
                                handler: function () {
                                    _this.dismiss();
                                }
                            }]
                    });
                    alert_1.present().then(function (data) {
                        setTimeout(function () {
                            document.cookie = "usuario" + "=" + 0;
                            document.cookie = "nombre" + "=" + '';
                            document.cookie = "telefono" + "=" + '';
                            document.cookie = "email" + "=" + '';
                            document.cookie = "iniciativa" + "=" + '';
                            _this.navCtrl.push('IniciativasPage');
                        }, 3000);
                    });
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Error al modificar la contraseña, verique los campos y vuelva a intentarlo.',
                        buttons: ['Aceptar']
                    });
                    alert_2.present();
                }
            }, function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Error al modificar la contraseña, consulte con el personal de sistemas.',
                    buttons: ['Aceptar']
                });
                alert.present();
            });
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Las contraseñas nuevas no coinciden, verifique los datos.',
                buttons: ['Aceptar']
            });
            alert_3.present();
        }
    };
    return CambiarContrasenaPage;
}());
CambiarContrasenaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cambiar-contrasena',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\cambiar-contrasena\cambiar-contrasena.html"*/'<ion-content padding>\n\n    <h1 class="titulo">Cambiar contraseña</h1>\n\n    <form [formGroup]="formRegister">\n\n      <ion-list class="subir-lista">\n\n        <ion-item>\n\n          <ion-label floating>Contraseña anterior: </ion-label>\n\n          <ion-input type="password" [(ngModel)]="antiguaContrasena" formControlName="contrasenaAntigua" required></ion-input>\n\n        </ion-item>\n\n  \n\n        <div *ngIf="formRegister.get(\'contrasenaAntigua\').errors && formRegister.get(\'contrasenaAntigua\').dirty">\n\n          <p color="danger" ion-text *ngIf="formRegister.get(\'contrasenaAntigua\').hasError(\'required\')">\n\n            El campo es requerido.\n\n          </p>\n\n        </div>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Contraseña: </ion-label>\n\n          <ion-input type="password" [(ngModel)]="contrasena" formControlName="contrasena" required></ion-input>\n\n        </ion-item>\n\n  \n\n        <div *ngIf="formRegister.get(\'contrasena\').errors && formRegister.get(\'contrasena\').dirty">\n\n          <p color="danger" ion-text *ngIf="formRegister.get(\'contrasena\').hasError(\'required\')">\n\n            El campo es requerido.\n\n          </p>\n\n        </div>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Confirmar contraseña: </ion-label>\n\n          <ion-input type="password" [(ngModel)]="confirmContrasena" formControlName="confirmarContrasena" required></ion-input>\n\n        </ion-item>\n\n  \n\n        <div *ngIf="formRegister.get(\'confirmarContrasena\').errors && formRegister.get(\'confirmarContrasena\').dirty">\n\n          <p color="danger" ion-text *ngIf="formRegister.get(\'confirmarContrasena\').hasError(\'required\')">\n\n            El campo es requerido.\n\n          </p>\n\n        </div>\n\n      </ion-list>\n\n  \n\n      <br>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button outline round class="posicionar-doble texto-normal" (click)="dismiss()">Cancelar</button> \n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button outline round class="posicionar-doble texto-normal" (click)="cambiarContrasena()" type="submit" block [disabled]="!formRegister.valid ">Guardar</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\cambiar-contrasena\cambiar-contrasena.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], CambiarContrasenaPage);

//# sourceMappingURL=cambiar-contrasena.js.map

/***/ })

});
//# sourceMappingURL=9.js.map