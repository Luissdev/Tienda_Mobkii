// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { LoginService } from './services/login.service'

import { CategoriaService } from './services/categoria.service'
import { ProductoService } from './services/producto.service'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    selector: 'my-app',
    templateUrl: './app/templates/layout.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService, CategoriaService, ProductoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
    public sesion = false;
    public categorias;
    public productos_array;
    public buscar = [];
    public productos: number = 0;
    public nombre: string;
    // public loading = true;

    constructor(private _router: Router,
        private _categoriaService: CategoriaService,
        private _productoService: ProductoService) {
        let token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            this.sesion = true;
        } else {
            this._router.navigate(['/login']);
        }
        this._categoriaService.getCategorias().then(respuesta => this.categorias = respuesta);
        if (localStorage.getItem('carrito')) {
            this.productos = JSON.parse(localStorage.getItem('carrito')).length;
        }
        console.log("hhhhh");
        this._productoService.getProductos().then(respuesta => this.productos_array = respuesta);
    }

    getBuscar(evento) {
        this.buscar = [];
        let palabra = evento.target.value;
        console.log(palabra);
        if (palabra != '') {
            for (let item of this.productos_array) {
                if (item.nombre.toLowerCase().includes(evento.target.value.toLocaleLowerCase())) {
                    this.buscar.push(item);
                }
            }
        }
    }

    mostrarCategoria(id) {
        console.log("si entra");
        this._router.navigate(['/null/', ('c' + id)]);
    }

    mostrarProducto() {
        if (this.nombre) {
            console.log(this.nombre);
            this._router.navigate(['/null/', ('b' + this.nombre)]);
        } else {
            console.log("por favor escriba el nombre del producto que desea buscar");
        }
        this.nombre = "";
        this.buscar = [];
    }

    salir() {
        localStorage.removeItem('token');
        localStorage.setItem('carrito', JSON.stringify([]));
        this._router.navigate(['/null/', -1]);
        this.sesion = false;
        this.productos = 0;
    }
}
