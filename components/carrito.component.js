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
var app_component_1 = require('../app.component');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var CarritoComponent = (function () {
    function CarritoComponent(_pedidoService, _appComponent) {
        this._pedidoService = _pedidoService;
        this._appComponent = _appComponent;
        this.carrito = [];
        this.total = 0;
        this.pagado = false;
    }
    CarritoComponent.prototype.crearPedido = function () {
        var token = localStorage.getItem('token');
        this._pedidoService.crearPedido(token, this.carrito).then(function (respuesta) { return console.log(respuesta); });
        localStorage.removeItem('carrito');
        this.pagado = true;
        this.carrito = [];
        this._appComponent.productos = 0;
    };
    CarritoComponent.prototype.sumarItem = function (id) {
        var cantidad = 0;
        for (var _i = 0, _a = this.carrito; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == id) {
                cantidad = item.cantidad += 1;
                console.log('Aqui esta sumando la cantidad' + cantidad);
                localStorage.setItem('carrito', JSON.stringify(this.carrito));
                this.total += item.precio;
                console.log(item.precio);
                return 1;
            }
        }
    };
    CarritoComponent.prototype.precioTotal = function () {
        for (var _i = 0, _a = this.carrito; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total += item.precio * item.cantidad;
            console.log(this.total);
        }
        return this.total;
    };
    CarritoComponent.prototype.restarItem = function (id) {
        var cantidad = 0;
        for (var _i = 0, _a = this.carrito; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == id) {
                if (item.cantidad >= 1) {
                    cantidad = item.cantidad -= 1;
                    console.log('Aqui esta sumando la cantidad' + cantidad);
                    localStorage.setItem('carrito', JSON.stringify(this.carrito));
                    this.total -= item.precio;
                    console.log(item.precio);
                    return 1;
                }
            }
        }
    };
    CarritoComponent.prototype.vaciarCarrito = function () {
        this.carrito = [];
        localStorage.removeItem('carrito');
        this._appComponent.productos = 0;
    };
    CarritoComponent.prototype.ngOnInit = function () {
        var check_carrito = localStorage.getItem('carrito');
        console.log(check_carrito);
        if (check_carrito) {
            this.carrito = JSON.parse(check_carrito);
        }
        this.precioTotal();
    };
    CarritoComponent = __decorate([
        core_1.Component({
            // selector: 'registro',
            templateUrl: '/app/templates/carrito.template.html',
            providers: [pedido_service_1.PedidoService]
        }), 
        __metadata('design:paramtypes', [pedido_service_1.PedidoService, app_component_1.AppComponent])
    ], CarritoComponent);
    return CarritoComponent;
}());
exports.CarritoComponent = CarritoComponent;
//# sourceMappingURL=carrito.component.js.map