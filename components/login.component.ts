// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'login',
    template: '<h1>login component</h1>'
})

// Clase del componente donde irán los datos y funcionalidades
export class LoginComponent implements OnInit {
    public usuario;

    ngOnInit() {
        this.usuario = { "nombre": '', "correo": '' }
    }

}
