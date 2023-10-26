import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';
import { DbzModule } from '../../dbz.module';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'

})
export class AgregarComponent {
  
  @Input() nuevoP:Personaje = {
    nombre: '',
    poder:1000
  }
  constructor(private dbzService:DbzService){}

// @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
agregarPersonaje(){
  if(this.nuevoP.nombre.length !=0){
  console.log(this.nuevoP)
  // this.onNuevoPersonaje.emit(this.nuevoP)
  this.dbzService.anadirPersonaje(this.nuevoP)
  this.nuevoP = {
    nombre:"",
    poder:0
  }

}



}
}
