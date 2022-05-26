import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  // traz o array do servico
  // cria uma interface
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];
  //como esse componente vai listar as pessoas disponibilizadas no servico peopleservice
  //é preciso chamar o servico no constructor do component
  //injecao de dependencias
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

    // dentro do ciclo de vida do angular vc chama o metodo de requisitar pessoas
    this.getPeopleComponent();
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