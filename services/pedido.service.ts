import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class PedidoService {
    public url = 'http://laracars.com/auth/';
    headers = new Headers();
    constructor(private _http: Http) {
    }

    crearPedido(token, productos) {
        let datos = { "token": token, "productos": productos };
        return this._http.post(this.url + 'pedido/crear-pedido', JSON.stringify(datos), { headers: this.headers })
            .toPromise()
            .then(respuesta => console.log(respuesta));
    }    
    getPedidos(id) {
        console.log(id);
        return this._http.get(this.url + 'pedido/pedidos/' + id)
            .toPromise()
            .then(respuesta => respuesta.json());
    }

    getPedidoDetalle(datos) {
        console.log(datos);
        return this._http.post(this.url + 'pedido/pedido-detalle', JSON.stringify(datos), { headers: this.headers })
            .toPromise()
            .then(respuesta => respuesta.json());
    }
}