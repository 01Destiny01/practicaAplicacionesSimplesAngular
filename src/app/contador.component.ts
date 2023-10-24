import { Component } from '@angular/core';


@Component({
selector: 'app-contador',
template: 


 

 <h3>{{numero}}</h3>
 <button (click) = "acumula((+base));">{{+base}}</button>
 <button (click) = "acumula((-base));">{{-base}}</button>  
//[No funciona pero en el tutorial  lo hace exactamente asi lo hace así y lo detecta bien, no como un comentario ._.]







})

export class ContadorComponent{
    title:string = 'CONTADOR';
    numero:number = 0;
    base:number = 5;
    acumula(valor:number){
    this.numero+=valor;
    }
}
