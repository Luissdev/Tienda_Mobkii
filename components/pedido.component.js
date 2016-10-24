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
var pedido_service_1 = require('.././services/pedido.service');
var router_1 = require('@angular/router');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var PedidoComponent = (function () {
    function PedidoComponent(_pedido, _router) {
        this._pedido = _pedido;
        this._router = _router;
    }
    PedidoComponent.prototype.getDetalle = function (id) {
        this._router.navigate(['/pedido/', id]);
    };
    PedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this._pedido.getPedidos(token).then(function (respuesta) { return _this.pedidos = respuesta; });
    };
    PedidoComponent = __decorate([
        core_1.Component({
            // selector: 'registro',
            templateUrl: '/app/templates/pedido.template.html',
            providers: [pedido_service_1.PedidoService]
        }), 
        __metadata('design:paramtypes', [pedido_service_1.PedidoService, router_1.Router])
    ], PedidoComponent);
    return PedidoComponent;
}());
exports.PedidoComponent = PedidoComponent;
//# sourceMappingURL=pedido.component.js.map