import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// decorator servico injetado no root, sendo assim disponivel a todos os componentes deste projeto
@Injectable({
  providedIn: 'root'
})
// este servico vai prover a lista de pessoas para todos os componentes da aplicacao
// o ideal seria essa aplicacao pegar esses dados de um backend
// precisamos de uma biblioteca RXJS - programacao reativa - assincrona
export class PeopleService {

  constructor() { }
  // essa funcao retorna um observable atraves do return of
  // retornando a lista de pessoas para quem precisar
  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Fernando',
        lastName: 'Gropp',
        age: 49
      },
      {
        firstName: 'Elisa',
        lastName: 'Samaniego',
        age: 38
      },
      {
        firstName: 'Henrique Samaniego',
        lastName: 'Gropp',
        age: 14
      },
      {
        firstName: 'Olívia Samaniego',
        lastName: 'Gropp',
        age: 0.8
      },
    ]
    // o of retorna um observavel
    return of(peopleArray)
  }
}
