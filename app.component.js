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
var router_1 = require('@angular/router');
var login_service_1 = require('./services/login.service');
var categoria_service_1 = require('./services/categoria.service');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var AppComponent = (function () {
    // public loading = true;
    function AppComponent(_router, _categoriaService) {
        var _this = this;
        this._router = _router;
        this._categoriaService = _categoriaService;
        this.sesion = false;
        this.productos = 0;
        var token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            this.sesion = true;
            console.log('no entra');
        }
        else {
            console.log("si entra");
            this._router.navigate(['/login']);
        }
        this._categoriaService.getCategorias().then(function (respuesta) { return _this.categorias = respuesta; });
        if (localStorage.getItem('carrito')) {
            this.productos = JSON.parse(localStorage.getItem('carrito')).length;
        }
    }
    AppComponent.prototype.mostrarCategoria = function (id) {
        this._router.navigate(['/categori/', id]);
    };
    AppComponent.prototype.salir = function () {
        localStorage.removeItem('token');
        localStorage.setItem('carrito', JSON.stringify([]));
        this._router.navigate(['/categori/', -1]);
        this.sesion = false;
        this.productos = 0;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/templates/layout.template.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [login_service_1.LoginService, categoria_service_1.CategoriaService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, categoria_service_1.CategoriaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map