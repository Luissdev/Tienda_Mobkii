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
// Decorador component, indicamos en que etiqueta se va a cargar la 
var ComodinComponent = (function () {
    function ComodinComponent(_router, _activatedRoute) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    ComodinComponent.prototype.ngOnInit = function () {
        var id;
        this._activatedRoute.params.subscribe(function (params) {
            id = params['id'];
            console.log(id.substr(1));
            console.log(id.substring(1));
            console.log(id);
        });
        if (id.charAt(0) === 'b') {
            this._router.navigate(['/buscar/', id.substring(1)]);
        }
        else {
            if (id.charAt(0) === 'c') {
                this._router.navigate(['/categoria/', id.substring(1)]);
            }
            else {
                this._router.navigate(['/login']);
            }
        }
    };
    ComodinComponent = __decorate([
        core_1.Component({
            // selector: 'registro',
            template: '',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], ComodinComponent);
    return ComodinComponent;
}());
exports.ComodinComponent = ComodinComponent;
//# sourceMappingURL=comodin.component.js.map