// Importar el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '.././services/pedido.service'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'

// Decorador component, indicamos en que etiqueta se va a cargar la 

@Component({
    // selector: 'registro',
    templateUrl: '/app/templates/pedido_detalle.template.html',
    providers: [PedidoService]
})

// Clase del componente donde irán los datos y funcionalidades
export class Pedido_DetalleComponent implements OnInit {
    public pedido;
    constructor(private _pedido: PedidoService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let id;
        this._activatedRoute.params.subscribe(
            params => {
                id = Number.parseInt(params['id']);
            }
        )
        let token = localStorage.getItem('token').replace('"', '');
        let datos = { token, "pedido_id": id }
        console.log(datos);
        this._pedido.getPedidoDetalle(datos).then(respuesta => this.pedido = respuesta);
    }

}
