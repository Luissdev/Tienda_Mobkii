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
        let id;
        console.log(id);
        this._activatedRoute.params.subscribe(params => {
            id = Number.parseInt(params['id']);
        })
        this._router.navigate(['/categoria/', id]);
    }
}
