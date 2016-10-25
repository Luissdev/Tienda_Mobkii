// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    template: '',
})

// Clase del componente donde irán los datos y funcionalidades
export class ComodinComponent implements OnInit {
    public productos;
    constructor(private _router: Router,
        private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let id: string;
        this._activatedRoute.params.subscribe(params => {
            id = params['id'];
            console.log(id.substr(1));
            console.log(id.substring(1));
            console.log(id);
        })
        if (id.charAt(0) === 'b') {
            this._router.navigate(['/buscar/', id.substring(1)]);
        } else {
            if (id.charAt(0) === 'c') {
                this._router.navigate(['/categoria/', id.substring(1)]);
            } else {
                this._router.navigate(['/login']);
            }
        }
    }
}
