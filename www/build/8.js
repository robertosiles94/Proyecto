webpackJsonp([8],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCuentaPageModule", function() { return CrearCuentaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_cuenta__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrearCuentaPageModule = (function () {
    function CrearCuentaPageModule() {
    }
    return CrearCuentaPageModule;
}());
CrearCuentaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__crear_cuenta__["a" /* CrearCuentaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crear_cuenta__["a" /* CrearCuentaPage */]),
        ],
    })
], CrearCuentaPageModule);

//# sourceMappingURL=crear-cuenta.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the CrearCuentaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CrearCuentaPage = (function () {
    function CrearCuentaPage(navCtrl, navParams, viewCtrl, services, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.services = services;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.formRegister = this.createRegisterForm();
    }
    CrearCuentaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CrearCuentaPage.prototype.createRegisterForm = function () {
        return this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            contrasena: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            confirmarContrasena: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^([A-Za-záéíóú ])+$')]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^([4]{1}[0-9]{6})$|^([6-7]{1}[0-9]{7})$')]]
        });
    };
    CrearCuentaPage.prototype.registrar = function () {
        if (this.contrasena == this.confirmContrasena) {
            this.services.registrarUsuario({ email: this.correo, nombreCompleto: this.nombre, telefono: this.telefono, password: this.contrasena });
            this.dismiss();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Las contraseñas no coinciden.',
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    return CrearCuentaPage;
}());
CrearCuentaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crear-cuenta',template:/*ion-inline-start:"E:\Mis proyectos\MiGusto\src\pages\crear-cuenta\crear-cuenta.html"*/'<ion-content padding>\n\n  <h1 class="titulo">Regístrate</h1>\n\n  <form [formGroup]="formRegister">\n\n    <ion-list class="subir-lista">\n\n      <ion-item>\n\n        <ion-label floating>Nombre completo: </ion-label>\n\n        <ion-input type="text" [(ngModel)]="nombre" required formControlName="nombre"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'nombre\').errors && formRegister.get(\'nombre\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'nombre\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'nombre\').hasError(\'pattern\')">\n\n          Solo se aceptan letras sin caracteres especiales.\n\n        </p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Teléfono: </ion-label>\n\n        <ion-input type="text" [(ngModel)]="telefono" formControlName="telefono"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'telefono\').errors && formRegister.get(\'telefono\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'telefono\').hasError(\'pattern\')">\n\n          Solo se aceptan teléfonos fijos (7 dígitos) o celulares (8 dígitos).\n\n        </p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Correo electrónico: </ion-label>\n\n        <ion-input type="email" [(ngModel)]="correo" required formControlName="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'email\').errors && formRegister.get(\'email\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'email\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'email\').hasError(\'email\')">\n\n          No es un correo válido.\n\n        </p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Contraseña: </ion-label>\n\n        <ion-input type="password" [(ngModel)]="contrasena" formControlName="contrasena" required></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'contrasena\').errors && formRegister.get(\'contrasena\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'contrasena\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Confirmar contraseña: </ion-label>\n\n        <ion-input type="password" [(ngModel)]="confirmContrasena" formControlName="confirmarContrasena" required></ion-input>\n\n      </ion-item>\n\n\n\n      <div *ngIf="formRegister.get(\'confirmarContrasena\').errors && formRegister.get(\'confirmarContrasena\').dirty">\n\n        <p color="danger" ion-text *ngIf="formRegister.get(\'confirmarContrasena\').hasError(\'required\')">\n\n          El campo es requerido.\n\n        </p>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <br>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button outline round class="posicionar-doble texto-normal" (click)="dismiss()">Cancelar</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button outline round class="posicionar-doble texto-normal" (click)="registrar()" type="submit" block [disabled]="!formRegister.valid ">Registrar</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\MiGusto\src\pages\crear-cuenta\crear-cuenta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], CrearCuentaPage);

//# sourceMappingURL=crear-cuenta.js.map

/***/ })

});
//# sourceMappingURL=8.js.map