import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from 'src/app/Interfaces/Personaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Output() nuevoPersonaje:EventEmitter<Personaje>=new EventEmitter<Personaje>()

  @Input() nuevoRecibido: Personaje;

  agregar() {
    //Si el campo nombre esta vacio salimos del metodo agregar
    if (this.nuevoRecibido.nombre.trim().length === 0) {
      return;
    }
    this.nuevoPersonaje.emit(this.nuevoRecibido);

    console.log(this.nuevoRecibido);
    this.InicializarFormulario();
  }

  InicializarFormulario() {
    this.nuevoRecibido = {
      nombre: '',
      poder: 0
    }
  }

}
