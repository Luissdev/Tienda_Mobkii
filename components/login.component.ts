// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { LoginService } from '.././services/login.service'
import { Router } from '@angular/router'

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
    public sesion = true;

    constructor(private _loginService: LoginService, private _router: Router) { }

    ngOnInit() {
        let token = localStorage.getItem('token');
        this.usuario = { "correo": '', "contrasenia": '' }
        if (token != '' || !token || token.length < 100) {
            this.sesion = false;
            // console.log('aca tambien');
        } else {
            this._router.navigate(['/inicio']);
            // console.log('aca no');
        }
    }

    getLogin() {
        this._loginService.getLogin(this.usuario)
            .then(respuesta => {
                console.log(respuesta);
                if (respuesta != '') {
                    localStorage.setItem('token', JSON.stringify(respuesta));
                    this._router.navigate(['/inicio']);
                }
            });
    }

}
