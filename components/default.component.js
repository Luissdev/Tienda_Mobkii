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
var categoria_service_1 = require('.././services/categoria.service');
var producto_service_1 = require('.././services/producto.service');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var DefaultComponent = (function () {
    function DefaultComponent(_router, _categoriaService, _productoService) {
        var _this = this;
        this._router = _router;
        this._categoriaService = _categoriaService;
        this._productoService = _productoService;
        this._productoService.getDestacados().then(function (respuesta) { return _this.productos = respuesta; });
    }
    DefaultComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('token')) {
            this._router.navigate(['/login']);
        }
    };
    DefaultComponent = __decorate([
        core_1.Component({
            // selector: 'default',
            templateUrl: '/app/templates/inicio.template.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [categoria_service_1.CategoriaService, producto_service_1.ProductoService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, categoria_service_1.CategoriaService, producto_service_1.ProductoService])
    ], DefaultComponent);
    return DefaultComponent;
}());
exports.DefaultComponent = DefaultComponent;
//# sourceMappingURL=default.component.js.map