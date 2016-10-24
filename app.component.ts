// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { LoginService } from './services/login.service'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})

// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
    public sesion = false;
    constructor(private _router: Router) {
        if (localStorage.getItem('token')) {
            this.sesion = true;
            console.log('no entra')
        } else {
            console.log("si entra");
            this._router.navigateByUrl('/login');
        }
    }
    // public sesion = false;
    // public token;
    // constructor(private _loginService: LoginService) { }
    // ngOnInit() {
    //     this.token = localStorage.getItem('token');
    //     this._loginService.checkToken(this.token).then(respuesta => {
    //         this.token = respuesta[0].id
    //         if (+this.token > 0) {
    //             localStorage.setItem('sesion', 'true');
    //         }
    //     }
    //     );
    // }
}
