// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { LoginService } from '.././services/login.service'
import { Router, ROUTER_DIRECTIVES } from '@angular/router'
import { AppComponent } from '../app.component'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'login',
    templateUrl: '/app/templates/login.template.html',
    providers: [LoginService],
    directives: [ROUTER_DIRECTIVES]
})

// Clase del componente donde irán los datos y funcionalidades
export class LoginComponent implements OnInit {
    public usuario;
    public token;
    public sesion = false;

    constructor(private _loginService: LoginService,
        private _router: Router,
        private _appComponent: AppComponent) { }

    ngOnInit() {
        let token = localStorage.getItem('token');
        this.usuario = { "correo": '', "contrasenia": '' }
        // console.log(token);
        if (!token) {
            this.sesion = false;
            console.log('el token no es valido');
        } else {
            this.sesion = true;
            this._router.navigate(['/inicio']);
            console.log('el token es valido');
        }
    }

    getLogin() {
        this._loginService.getLogin(this.usuario)
            .then(respuesta => {
                console.log(respuesta);
                if (respuesta != '') {
                    localStorage.setItem('token', JSON.stringify(respuesta));
                    this._router.navigate(['/inicio']);
                    this._appComponent.sesion = true;
                }
            });
    }
}
