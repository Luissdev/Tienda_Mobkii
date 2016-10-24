"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login.component');
var default_component_1 = require('./components/default.component');
var registro_component_1 = require('./components/registro.component');
exports.routes = [
    { path: '*', component: login_component_1.LoginComponent },
    { path: 'inicio', component: default_component_1.DefaultComponent },
    { path: '', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registro', component: registro_component_1.RegistroComponent },
];
exports.APP_ROUTER_PROVIDER = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map