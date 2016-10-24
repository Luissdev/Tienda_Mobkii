// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { LoginService } from './services/login.service'

import { CategoriaService } from './services/categoria.service'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/layout.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService, CategoriaService]
})

// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
    public sesion = false;
    public categorias;
    constructor(private _router: Router, private _categoriaService: CategoriaService) {
        let token = localStorage.getItem('token');
        console.log(token);
        if (token != '' || token != null || token != 'null') {
            this.sesion = true;
            console.log('no entra')
        } else {
            console.log("si entra");
            this._router.navigate(['/login']);
        }
        this._categoriaService.getCategorias().then(respuesta => this.categorias = respuesta);
    }

    mostrarCategoria(id) {
        console.log(id);
        this._router.navigate(['/categoria/', id]);
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
