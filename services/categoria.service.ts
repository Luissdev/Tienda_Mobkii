import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'


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
        return this._http.get(this.url + 'categoria/productos/' + id)
            .toPromise()
            .then(respuesta => respuesta.json());
    }
}