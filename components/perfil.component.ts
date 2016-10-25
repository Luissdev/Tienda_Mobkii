// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { LoginService } from '.././services/login.service'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    templateUrl: '/app/templates/perfil.template.html',
    providers: [LoginService]
})

// Clase del componente donde irán los datos y funcionalidades
export class PerfilComponent implements OnInit {
    public usuario;
    public cargado = false;
    constructor(private _loginService: LoginService) { }
    ngOnInit() {
        this._loginService.getUsuario(localStorage.getItem('token'))
            .then(respuesta => {
                this.usuario = respuesta;
                this.cargado = true;
            }); 
    }
}
