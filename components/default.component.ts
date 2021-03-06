// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { CategoriaService } from '.././services/categoria.service'
import { ProductoService } from '.././services/producto.service'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'default',
    templateUrl: '/app/templates/inicio.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CategoriaService, ProductoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class DefaultComponent implements OnInit {
    public productos = [];
    constructor(
        private _router: Router,
        private _categoriaService: CategoriaService,
        private _productoService: ProductoService) {

        this._productoService.getDestacados().subscribe(respuesta => {
            this.productos = respuesta
        });
    }

    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this._router.navigate(['/login']);
        }
    }
}
