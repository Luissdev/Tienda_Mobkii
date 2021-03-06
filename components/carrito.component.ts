// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '.././services/pedido.service'
import { AppComponent } from '../app.component'
// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    templateUrl: '/app/templates/carrito.template.html',
    providers: [PedidoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class CarritoComponent implements OnInit {
    public carrito = [];
    public total: number = 0;
    public pagado = false;


    constructor(private _pedidoService: PedidoService,
        private _appComponent: AppComponent) { }


    crearPedido() {
        let token = localStorage.getItem('token');
        this._pedidoService.crearPedido(token, this.carrito).then(respuesta => console.log(respuesta));
        localStorage.removeItem('carrito');
        this.pagado = true;
        this.carrito = [];
        this._appComponent.productos = 0;
    }
    sumarItem(id) {
        let cantidad = 0;
        for (let item of this.carrito) {
            if (item.id == id) {
                cantidad = item.cantidad += 1;
                console.log('Aqui esta sumando la cantidad' + cantidad);
                localStorage.setItem('carrito', JSON.stringify(this.carrito));
                this.total += item.precio;
                console.log(item.precio);
                return 1;
            }
        }
    }

    precioTotal() {
        for (let item of this.carrito) {
            this.total += item.precio * item.cantidad;
            console.log(this.total);
        }
        return this.total;
    }

    restarItem(id) {
        let cantidad = 0;
        for (let item of this.carrito) {
            if (item.id == id) {
                if (item.cantidad >= 1) {
                    cantidad = item.cantidad -= 1;
                    console.log('Aqui esta sumando la cantidad' + cantidad);
                    localStorage.setItem('carrito', JSON.stringify(this.carrito));
                    this.total -= item.precio;
                    console.log(item.precio);
                    return 1;
                }
            }
        }
    }

    vaciarCarrito() {
        this.carrito = [];
        localStorage.removeItem('carrito');
        this._appComponent.productos = 0;
    }
    ngOnInit() {
        let check_carrito = localStorage.getItem('carrito');
        console.log(check_carrito);
        if (check_carrito) {
            this.carrito = JSON.parse(check_carrito);
        }
        this.precioTotal();
    }
}
