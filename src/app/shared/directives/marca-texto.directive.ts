import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
// vamos implementar nesta diretiva a classe/metodo onInit
export class MarcaTextoDirective implements OnInit{
  // decorator com a cor de fundo amarela e o texto branco como default
  // @input diz que o metodo é hereditario PAI -> FILHO
  // essas propriedades podem ser chamadas ao usar a diretiva
  @Input() corDeFundo: string = 'yellow';
  @Input() corDeTexto: string = 'white';
  // variavel do tipo primitive do Angular ElementRef
  // estudar esse ElementRef
  constructor(private elemento: ElementRef) { }
  ngOnInit(): void {
  // ao iniciar essa diretiva ele chama o metodo abaixo de mudarFundo
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    // atribui ao elemento a cor de fundo default OU a cor do argumento
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    // atribui ao elemento a cor do texto default ou a cor do argumento
    this.elemento.nativeElement.style.color = this.corDeTexto;
    this.elemento.nativeElement.style.fonteWeight = 'bold';
  }
}
  