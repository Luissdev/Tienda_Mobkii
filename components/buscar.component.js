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
var producto_service_1 = require('.././services/producto.service');
var router_1 = require('@angular/router');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var BuscarComponent = (function () {
    function BuscarComponent(productoService, _router, _activatedRoute) {
        this.productoService = productoService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    BuscarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nombre;
        this._activatedRoute.params.subscribe(function (params) {
            nombre = params['nombre'];
        });
        this.productoService.getProductoBuscado(nombre).then(function (respuesta) { return _this.productos = respuesta; });
    };
    BuscarComponent = __decorate([
        core_1.Component({
            // selector: 'registro',
            templateUrl: '/app/templates/categoria.template.html',
            providers: [producto_service_1.ProductoService]
        }), 
        __metadata('design:paramtypes', [producto_service_1.ProductoService, router_1.Router, router_1.ActivatedRoute])
    ], BuscarComponent);
    return BuscarComponent;
}());
exports.BuscarComponent = BuscarComponent;
//# sourceMappingURL=buscar.component.js.map