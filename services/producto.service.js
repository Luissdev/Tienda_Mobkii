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
require('rxjs/add/operator/map');
var ProductoService = (function () {
    function ProductoService(_http) {
        this._http = _http;
        this.url = 'http://laracars.com/auth/';
        this.headers = new http_1.Headers();
    }
    ProductoService.prototype.getDestacados = function () {
        return this._http.get(this.url + 'producto/destacados').map(function (respuesta) { return respuesta.json(); });
        // .toPromise()
        // .then(respuesta => respuesta.json());
    };
    ProductoService.prototype.getProductos = function () {
        return this._http.get(this.url + 'producto/productos')
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); });
    };
    ProductoService.prototype.getProductoBuscado = function (nombre) {
        return this._http.get(this.url + ("producto/producto-buscado/" + nombre))
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); });
    };
    ProductoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductoService);
    return ProductoService;
}());
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map