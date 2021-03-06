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
// Decorador component, indicamos en que etiqueta se va a cargar la 
var PerfilComponent = (function () {
    function PerfilComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.cargado = false;
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('token')) {
            this._router.navigate(['/login']);
        }
        else {
            this._loginService.getUsuario(localStorage.getItem('token'))
                .then(function (respuesta) {
                _this.usuario = respuesta;
                _this.cargado = true;
            });
        }
    };
    PerfilComponent = __decorate([
        core_1.Component({
            // selector: 'registro',
            templateUrl: '/app/templates/perfil.template.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map