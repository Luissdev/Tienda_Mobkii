"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login.component');
var default_component_1 = require('./components/default.component');
var registro_component_1 = require('./components/registro.component');
var perfil_component_1 = require('./components/perfil.component');
var pedido_component_1 = require('./components/pedido.component');
var pedido_detalle_component_1 = require('./components/pedido_detalle.component');
var categoria_component_1 = require('./components/categoria.component');
var carrito_component_1 = require('./components/carrito.component');
var comodin_component_1 = require('./components/comodin.component');
exports.routes = [
    { path: '*', component: login_component_1.LoginComponent },
    { path: 'inicio', component: default_component_1.DefaultComponent },
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registro', component: registro_component_1.RegistroComponent },
    { path: 'categoria/:id', component: categoria_component_1.CategoriaComponent },
    { path: 'categori/:id', component: comodin_component_1.ComodinComponent },
    { path: 'perfil', component: perfil_component_1.PerfilComponent },
    { path: 'carrito', component: carrito_component_1.CarritoComponent },
    { path: 'pedidos', component: pedido_component_1.PedidoComponent },
    { path: 'pedido/:id', component: pedido_detalle_component_1.Pedido_DetalleComponent },
];
exports.APP_ROUTER_PROVIDER = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map