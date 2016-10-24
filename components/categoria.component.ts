// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CategoriaService } from '.././services/categoria.service'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    template: '<h1>componente de registro</h1>'
})

// Clase del componente donde irán los datos y funcionalidades
export class CategoriaComponent implements OnInit {
    public productos;
    constructor(private _router: Router, private _categoriaService: CategoriaService) { }

    getProductos(id) {
        this._categoriaService.getProductos(id).then(respuesta => this.productos = respuesta);
    }
    mostrarCategoria(id) {
        
    }
    ngOnInit() {
        console.log('categoria component');
    }
}
