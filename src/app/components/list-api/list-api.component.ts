import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
// importado no app.modules o modulo http do angular para acessar api
// esse componente recebe os dados do servico list.service e preenche os dados no html list.api.component.html

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  // array que vai guardar o retorno da api
  // nao se deve tipar as coisas como any, mas neste caso vamos usar assim
  // se nao tipar da erro na getlist()
  personagens: Array<any> = [];

  // injeto a dependencia do servico listService na variavel de mesmo nome que recebera os dados do get
  constructor(private listService: ListService ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    // chamo o metodo e me subscrevo, esperando a volta do observer
    // funcao arrow callback joga em result o getList que depois sera salvo na variavel personagens
    this.listService.getList().subscribe(result => {
      //seleciona somente o objeto results da API
      this.personagens = result.results;
      console.log(this.personagens);
    })
  }

}
