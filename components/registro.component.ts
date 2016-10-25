// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { LoginService } from '.././services/login.service'
import { Router, ROUTER_DIRECTIVES } from '@angular/router'
import { AppComponent } from '../app.component'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'login',
    templateUrl: '/app/templates/registro.template.html',
    providers: [LoginService],
    directives: [ROUTER_DIRECTIVES]
})

// Clase del componente donde irán los datos y funcionalidades
export class RegistroComponent implements OnInit {
    public usuario;
    public token;
    public sesion = false;

    constructor(private _loginService: LoginService,
        private _router: Router,
        private _appComponent: AppComponent) { }


    getRegistro() {
        this._loginService.getRegistro(this.usuario).then(respuesta => {
            if (respuesta != '') {
                localStorage.setItem('token', JSON.stringify(respuesta));
                this._router.navigate(['/inicio']);
                this._appComponent.sesion = true;
            }
        })
    }
    ngOnInit() {
        this.usuario = { "nombre": '', "correo": '', "contrasenia": '', "contrasenia_confirmar": '' }
    }


}
