import { provideRouter, RouterConfig } from '@angular/router'

import { LoginComponent } from './components/login.component'
import { DefaultComponent } from './components/default.component'
import { RegistroComponent } from './components/registro.component'
import { PerfilComponent } from './components/perfil.component'
import { PedidoComponent } from './components/pedido.component'
import { Pedido_DetalleComponent } from './components/pedido_detalle.component'
import { CategoriaComponent } from './components/categoria.component'
import { CarritoComponent } from './components/carrito.component'
import { ComodinComponent } from './components/comodin.component'
import { AppComponent } from './app.component'

export const routes: RouterConfig = [
    { path: '*', component: LoginComponent },
    { path: 'inicio', component: DefaultComponent },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'categoria/:id', component: CategoriaComponent },
    { path: 'categori/:id', component: ComodinComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'pedidos', component: PedidoComponent },
    { path: 'pedido/:id', component: Pedido_DetalleComponent },
];

export const APP_ROUTER_PROVIDER = [
    provideRouter(routes)
];