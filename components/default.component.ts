// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { CategoriaService } from '.././services/categoria.service'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'default',
    templateUrl: '/app/templates/layout.template.html',
    providers: [CategoriaService]
})

// Clase del componente donde irán los datos y funcionalidades
export class DefaultComponent implements OnInit {
    public categorias;
    constructor(private _router: Router, private _categoriaService: CategoriaService) { }

    ngOnInit() {
        this._categoriaService.getCategorias().then(respuesta => this.categorias = respuesta);
    }
}
