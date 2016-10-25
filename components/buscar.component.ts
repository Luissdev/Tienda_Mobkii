// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '.././services/producto.service'
import { Router, ActivatedRoute } from '@angular/router'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    templateUrl: '/app/templates/categoria.template.html',
    providers: [ProductoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class BuscarComponent implements OnInit {
    public productos;
    constructor(private productoService: ProductoService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute, ) { }

    ngOnInit() {
        let nombre;
        this._activatedRoute.params.subscribe(params => {
            nombre = params['nombre'];
        })
        this.productoService.getProductoBuscado(nombre).then(respuesta => this.productos = respuesta);
    }
}
