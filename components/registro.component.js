"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar el núcleo de Angular
var core_1 = require('@angular/core');
var login_service_1 = require('.././services/login.service');
var router_1 = require('@angular/router');
var app_component_1 = require('../app.component');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var RegistroComponent = (function () {
    function RegistroComponent(_loginService, _router, _appComponent) {
        this._loginService = _loginService;
        this._router = _router;
        this._appComponent = _appComponent;
        this.sesion = false;
    }
    RegistroComponent.prototype.getRegistro = function () {
        var _this = this;
        this._loginService.getRegistro(this.usuario).then(function (respuesta) {
            if (respuesta != '') {
                localStorage.setItem('token', JSON.stringify(respuesta));
                _this._router.navigate(['/inicio']);
                _this._appComponent.sesion = true;
            }
        });
    };
    RegistroComponent.prototype.ngOnInit = function () {
        this.usuario = { "nombre": '', "correo": '', "contrasenia": '', "contrasenia_confirmar": '' };
    };
    RegistroComponent = __decorate([
        core_1.Component({
            // selector: 'login',
            templateUrl: '/app/templates/registro.template.html',
            providers: [login_service_1.LoginService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, app_component_1.AppComponent])
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
//# sourceMappingURL=registro.component.js.map