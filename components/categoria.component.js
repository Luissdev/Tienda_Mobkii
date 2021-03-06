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
var app_component_1 = require('../app.component');
// Decorador component, indicamos en que etiqueta se va a cargar la 
var CategoriaComponent = (function () {
    function CategoriaComponent(_router, _categoriaService, _activatedRoute, _appComponent) {
        var _this = this;
        this._router = _router;
        this._categoriaService = _categoriaService;
        this._activatedRoute = _activatedRoute;
        this._appComponent = _appComponent;
        this.carrito = [];
        var id;
        console.log(id);
        this._activatedRoute.params.subscribe(function (params) {
            id = Number.parseInt(params['id']);
        });
        this._categoriaService.getProductos(id).subscribe(function (respuesta) { return _this.productos = respuesta; });
    }
    CategoriaComponent.prototype.agregarCarrito = function (id, nombre, precio) {
        var check_carrito = JSON.parse(localStorage.getItem('carrito'));
        if (check_carrito) {
            this.carrito = check_carrito;
            var checar = this.sumar_item(id);
            if (+checar === 1) {
                console.log('Este producto ya se encuentra en su carrito');
            }
            else {
                var articulo = { "id": id, "nombre": nombre, "precio": precio, "cantidad": 1 };
                this.carrito.push(articulo);
                localStorage.setItem('carrito', JSON.stringify(this.carrito));
                this._appComponent.productos++;
            }
        }
        else {
            var articulo = { "id": id, "nombre": nombre, "precio": precio, "cantidad": 1 };
            this.carrito.push(articulo);
            localStorage.setItem('carrito', JSON.stringify(this.carrito));
            this._appComponent.productos++;
        }
    };
    CategoriaComponent.prototype.sumar_item = function (id) {
        var index = 0;
        var i = 0;
        var cantidad = 0;
        for (var _i = 0, _a = this.carrito; _i < _a.length; _i++) {
            var item = _a[_i];
            i++;
            if (item.id == id) {
                if (confirm("Este producto ya se encuentra en su carrito, ¿Desea agregarlo de nuevo?")) {
                    cantidad = item.cantidad += 1;
                    console.log('Aqui esta sumando la cantidad' + cantidad);
                    localStorage.setItem('carrito', JSON.stringify(this.carrito));
                }
                return 1;
            }
        }
    };
    CategoriaComponent.prototype.ngOnInit = function () {
        // if (!localStorage.getItem('token')) {
        //     this._router.navigate(['/login']);
        // }
    };
    CategoriaComponent = __decorate([
        core_1.Component({
            // selector: 'registro',
            templateUrl: '/app/templates/categoria.template.html',
            providers: [categoria_service_1.CategoriaService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, categoria_service_1.CategoriaService, router_1.ActivatedRoute, app_component_1.AppComponent])
    ], CategoriaComponent);
    return CategoriaComponent;
}());
exports.CategoriaComponent = CategoriaComponent;
//# sourceMappingURL=categoria.component.js.map