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
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router, _appComponent) {
        this._loginService = _loginService;
        this._router = _router;
        this._appComponent = _appComponent;
        this.sesion = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        this.usuario = { "correo": '', "contrasenia": '' };
        // console.log(token);
        if (!token) {
            this.sesion = false;
            console.log('el token no es valido');
        }
        else {
            this.sesion = true;
            this._router.navigate(['/inicio']);
            console.log('el token es valido');
        }
    };
    LoginComponent.prototype.getLogin = function () {
        var _this = this;
        this._loginService.getLogin(this.usuario)
            .then(function (respuesta) {
            console.log(respuesta);
            if (respuesta != '') {
                localStorage.setItem('token', JSON.stringify(respuesta));
                _this._router.navigate(['/inicio']);
                _this._appComponent.sesion = true;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            // selector: 'login',
            templateUrl: '/app/templates/login.template.html',
            providers: [login_service_1.LoginService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, app_component_1.AppComponent])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map