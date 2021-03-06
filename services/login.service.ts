import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class LoginService {
    public url = 'http://laracars.com/auth/';
    headers = new Headers();
    constructor(private _http: Http) {
    }

    getUsuario(token) {
        return this._http.get(this.url + 'cliente/cliente/' + token)
            .toPromise()
            .then(respuesta => respuesta.json());
    }

    getLogin(usuario) {
        this.headers.append('Content-Type', 'application/json');
        console.log(usuario);
        return this._http.post(this.url + 'cliente/login', JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then(respuesta => respuesta.json());
    }

    getRegistro(usuario) {
        this.headers.append('Content-Type', 'application/json');        
        console.log(usuario);
        return this._http.post(this.url + 'cliente/registro', JSON.stringify(usuario), { headers: this.headers })
            .toPromise()
            .then(respuesta => respuesta.json());
    }

    checkToken(token) {
        return this._http.get(this.url + 'cliente/token/' + token)
            .toPromise().then(respuesta => respuesta.json());
    }
}