import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// classe do componente raiz
// importa o metodo OnInit
export class AppComponent implements OnInit{
  count = 0;
  nome = 'Fernando Gropp';
  text = '';
  // traz o array do servico
  // cria uma interface
  // executa direto no proprio modulo
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];
  // no construtor vc chama o servico criado
  // ao passar o servico como parametro para o construtor, vc disponibiliza para esse componente o servico
  // injecao  de dependencias
  constructor(private peopleService: PeopleService) {}
  // implementa esse ciclo de vido do componente
  // metodo inicia quando o componente abrir
  ngOnInit() {
    console.log(this.pessoas)
    // chama a funcao local para listar as pessoas
    this.getPeopleComponent();
    let interval = setInterval(() => {
    // incrementa a variavel de escopo da classe
    this.count++;
    // quando chegar a 10 ele para o intervalo
    if (this.count === 10) {
    clearInterval(interval)}
    }, 1000)
  }
  // evento, chama fora do OnInit
  clicou(nome: string): void {
  console.log('Clicou em mim', nome)
  }

  // cria um metodo dentro deste servico para chamar o metodo do servico e se subscreve no metodo observable
  // com uma funcao de callback => {}
  getPeopleComponent() {
    this.peopleService.getPeople().subscribe(people => {
      // a varivel pessoas recebe o retorno do metodo getPeople
      this.pessoas = people;
    })
  }
}
