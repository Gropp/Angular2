import { Component, OnInit } from '@angular/core';

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

  pessoas = [
    {
    nome: 'Fernando',
    sobrenome: 'Gropp'
    },
    {
    nome: 'Elisa',
    sobrenome: 'Ramirez'
    },
    {
    nome: 'Henrique',
    sobrenome: 'Gropp'
    },
    {
    nome: 'Olivia',
    sobrenome: 'Gropp'
    }
  ];
  constructor() {}
  // implementa esse ciclo de vido do componente
  // metodo inicia quando o componente abrir
  ngOnInit() {
    console.log(this.pessoas)
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
}
