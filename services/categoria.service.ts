import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class CategoriaService {
    public url = 'http://laracars.com/auth/';
    headers = new Headers();
    constructor(private _http: Http) {
    }

    getCategorias() {
        return this._http.get(this.url + 'categoria/categorias')
            .toPromise()
            .then(respuesta => respuesta.json());
    }

    getProductos(id) {
        return this._http.get(this.url + 'categoria/productos/' + id).map(respuesta => respuesta.json());
            // .toPromise()
            // .then(respuesta => respuesta.json());
    }
}