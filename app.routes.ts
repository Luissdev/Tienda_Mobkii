import { provideRouter, RouterConfig } from '@angular/router'

import { LoginComponent } from './components/login.component'
import { DefaultComponent } from './components/default.component'
import { RegistroComponent } from './components/registro.component'

export const routes: RouterConfig = [
    { path: '*', component: DefaultComponent },
    { path: '', component: DefaultComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
];

export const APP_ROUTER_PROVIDER = [
    provideRouter(routes)
];