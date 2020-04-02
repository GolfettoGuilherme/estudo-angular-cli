import { HttpClient, HttpParams } from '@angular/common/http'; //no module.ts tem a explicacao de como injetar
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

//quando o angular criar esse cara, qualquer componente da applicacao vai poder usar como injecao de dependencia
@Injectable({providedIn :'root'})
export class PhotoService {

    //o private serve para indicar para o TypeScript que o HttpCliente é uma propriedade
    constructor(private http: HttpClient) {}

    listFromUser(userName: string){
        //repara um httpcliente para o endereco solicitado, mas nao dispara
        return this.http.get<Photo[]>(API + `/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number){
        const params = new HttpParams().append('page', page.toString());
        //repara um httpcliente para o endereco solicitado, mas nao dispara
        return this.http.get<Photo[]>(API + `/${userName}/photos`, { params });
    }

}