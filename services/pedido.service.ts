import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class PedidoService {
    public url = 'http://laracars.com/auth/';
    headers = new Headers();
    constructor(private _http: Http) {
    }

    getPedidos(id) {
        console.log(id);
        return this._http.get(this.url + 'pedido/pedidos/'+id)
            .toPromise()
            .then(respuesta => respuesta.json());
    }

    getProductos(id) {
        return this._http.get(this.url + 'categoria/productos')
            .toPromise()
            .then(respuesta => respuesta.json());
    }
}