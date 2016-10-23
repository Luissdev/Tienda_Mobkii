import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class LoginService {
    public url = 'http://laracars.com/auth/';
    headers = new Headers();
    constructor(private _http: Http) {
    }

    getLogin(usuario) {
        console.log(usuario);
        this.headers.append('Content-Type', 'application/json');
        return this._http.post(this.url + 'cliente/login', JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then(respuesta => respuesta.json());
    }
}