import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: 'contador/contador.component.html'

})

export class ContadorComponent {
  title: string = 'CONTADOR';
  numero: number = 0;
  base: number = 5;
  acumula(valor: number) {
    this.numero += valor;
  }
}
