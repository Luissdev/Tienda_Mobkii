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
var producto_service_1 = require('./services/producto.service');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var AppComponent = (function () {
    // public loading = true;
    function AppComponent(_router, _categoriaService, _productoService) {
        var _this = this;
        this._router = _router;
        this._categoriaService = _categoriaService;
        this._productoService = _productoService;
        this.sesion = false;
        this.buscar = [];
        this.productos = 0;
        var token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            this.sesion = true;
        }
        else {
            this._router.navigate(['/login']);
        }
        this._categoriaService.getCategorias().then(function (respuesta) { return _this.categorias = respuesta; });
        if (localStorage.getItem('carrito')) {
            this.productos = JSON.parse(localStorage.getItem('carrito')).length;
        }
        console.log("hhhhh");
        this._productoService.getProductos().then(function (respuesta) { return _this.productos_array = respuesta; });
    }
    AppComponent.prototype.getBuscar = function (evento) {
        this.buscar = [];
        var palabra = evento.target.value;
        console.log(palabra);
        if (palabra != '') {
            for (var _i = 0, _a = this.productos_array; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.nombre.toLowerCase().includes(evento.target.value.toLocaleLowerCase())) {
                    this.buscar.push(item);
                }
            }
        }
    };
    AppComponent.prototype.mostrarCategoria = function (id) {
        console.log("si entra");
        this._router.navigate(['/null/', ('c' + id)]);
    };
    AppComponent.prototype.mostrarProducto = function () {
        if (this.nombre) {
            console.log(this.nombre);
            this._router.navigate(['/null/', ('b' + this.nombre)]);
        }
        else {
            console.log("por favor escriba el nombre del producto que desea buscar");
        }
        this.nombre = "";
        this.buscar = [];
    };
    AppComponent.prototype.salir = function () {
        localStorage.removeItem('token');
        localStorage.setItem('carrito', JSON.stringify([]));
        this._router.navigate(['/null/', -1]);
        this.sesion = false;
        this.productos = 0;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/templates/layout.template.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [login_service_1.LoginService, categoria_service_1.CategoriaService, producto_service_1.ProductoService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, categoria_service_1.CategoriaService, producto_service_1.ProductoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map