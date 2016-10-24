// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '.././services/pedido.service'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    template: '<h1>hola</h1>',
    providers: [PedidoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class Pedido_DetalleComponent implements OnInit {
    public pedidos;
    constructor(private _pedido: PedidoService, private _router: Router) { }

    getDetalle(id) {
        this._router.navigate(['/pedido/', id]);
    }

    ngOnInit() {
        let token = localStorage.getItem('token');
        this._pedido.getPedidos(token).then(respuesta => this.pedidos = respuesta);
    }

}
