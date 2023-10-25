import { Component } from '@angular/core';

interface Personaje{
  nombre: string
  poder:number

}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})

export class MainPageComponent {
  nuevoP:Personaje = {
    nombre: '',
    poder:0
  }
  personajes:Personaje[] = [
  {
    nombre:'Goku',
    poder:15000
  },
  {
    nombre:'Vegeta',
    poder:7500
  }
  ]
  agregarPersonaje(){
    if(this.nuevoP.nombre.length !=0){
    this.personajes.push(this.nuevoP)
    this.nuevoP = {
      nombre:"",
      poder:0

    }
  }
  


  }
}
