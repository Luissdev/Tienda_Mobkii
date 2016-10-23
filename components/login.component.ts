// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { LoginService } from '.././services/login.service'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'login',
    templateUrl: '/app/templates/login.template.html',
    providers: [LoginService]
})

// Clase del componente donde irán los datos y funcionalidades
export class LoginComponent implements OnInit {
    public usuario;
    public token;

    constructor(private _loginService: LoginService) { }
    ngOnInit() {
        this.usuario = { "correo": '', "contrasenia": '' }
    }

    getLogin() {
        this._loginService.getLogin(this.usuario).then(respuesta => localStorage.setItem('token', JSON.stringify(respuesta)));
        if (this.token != null) {
            localStorage.setItem('token', JSON.stringify(this.token));
        }
    }

}
