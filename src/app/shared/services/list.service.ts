import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // constante que guarda o caminho da api
  apiURL = '/api/character/';

  // injecao de dependencias - outro servico - neste caso o httpClient
  constructor(private httpClient: HttpClient) { }

  //criar os metodos
  //retorna um array de any - qualquer tipo de dados
  //tem que tipar os retornos
  //criamos uma tipagem no comeco
  getList():Observable<any> {
    // o parametro principal da propriedade get é a URL da API
    return this.httpClient.get<any>(this.apiURL);
  }
}
