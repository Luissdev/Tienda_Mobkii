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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PedidoService = (function () {
    function PedidoService(_http) {
        this._http = _http;
        this.url = 'http://laracars.com/auth/';
        this.headers = new http_1.Headers();
    }
    PedidoService.prototype.crearPedido = function (token, productos) {
        var datos = { "token": token, "productos": productos };
        return this._http.post(this.url + 'pedido/crear-pedido', JSON.stringify(datos), { headers: this.headers })
            .toPromise()
            .then(function (respuesta) { return console.log(respuesta); });
    };
    PedidoService.prototype.getPedidos = function (id) {
        console.log(id);
        return this._http.get(this.url + 'pedido/pedidos/' + id)
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); });
    };
    PedidoService.prototype.getPedidoDetalle = function (datos) {
        console.log(datos);
        return this._http.post(this.url + 'pedido/pedido-detalle', JSON.stringify(datos), { headers: this.headers })
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); });
    };
    PedidoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PedidoService);
    return PedidoService;
}());
exports.PedidoService = PedidoService;
//# sourceMappingURL=pedido.service.js.map