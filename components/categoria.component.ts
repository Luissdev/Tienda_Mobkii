// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CategoriaService } from '.././services/categoria.service'
import { AppComponent } from '../app.component'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    templateUrl: '/app/templates/categoria.template.html',
    providers: [CategoriaService]
})

// Clase del componente donde irán los datos y funcionalidades
export class CategoriaComponent implements OnInit {
    public productos;
    public carrito = [];
    public bandera: number;
    constructor(private _router: Router,
        private _categoriaService: CategoriaService,
        private _activatedRoute: ActivatedRoute,
        private _appComponent: AppComponent) {

        let id;
        console.log(id);
        this._activatedRoute.params.subscribe(params => {
            id = Number.parseInt(params['id']);
        })
        this._categoriaService.getProductos(id).subscribe(respuesta => this.productos = respuesta);
    }


    agregarCarrito(id, nombre, precio) {
        let check_carrito = JSON.parse(localStorage.getItem('carrito'));
        if (check_carrito) {
            this.carrito = check_carrito;
            let checar = this.sumar_item(id);
            if (+checar === 1) {
                console.log('Este producto ya se encuentra en su carrito');
            } else {
                let articulo = { "id": id, "nombre": nombre, "precio": precio, "cantidad": 1 }
                this.carrito.push(articulo);
                localStorage.setItem('carrito', JSON.stringify(this.carrito));
                this._appComponent.productos++;
            }
        } else {
            let articulo = { "id": id, "nombre": nombre, "precio": precio, "cantidad": 1 }
            this.carrito.push(articulo);
            localStorage.setItem('carrito', JSON.stringify(this.carrito));
            this._appComponent.productos++;
        }
    }

    sumar_item(id) {
        let index = 0;
        let i = 0;
        let cantidad = 0;
        for (let item of this.carrito) {
            i++;
            if (item.id == id) {
                if (confirm("Este producto ya se encuentra en su carrito, ¿Desea agregarlo de nuevo?")) {
                    cantidad = item.cantidad += 1;
                    console.log('Aqui esta sumando la cantidad' + cantidad);
                    localStorage.setItem('carrito', JSON.stringify(this.carrito));
                }
                return 1;
            }
        }
    }

    ngOnInit() {
        // if (!localStorage.getItem('token')) {
        //     this._router.navigate(['/login']);
        // }
    }
}
