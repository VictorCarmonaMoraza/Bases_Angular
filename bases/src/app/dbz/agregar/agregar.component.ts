import { DbzService } from './../../services/dbz.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from 'src/app/Interfaces/Personaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input() nuevoRecibido: Personaje;

  constructor(private dbzService:DbzService){}

  agregar() {
    //Si el campo nombre esta vacio salimos del metodo agregar
    if (this.nuevoRecibido.nombre.trim().length === 0) {
      return;
    }

    //llamada al servicio para agregar el personaje
    this.dbzService.agregarPersonaje(this.nuevoRecibido);
    //Inicializamos el formulario conn los campos vacios
    this.InicializarFormulario();
  }

  //Metodo para inicilizar el formulario
  InicializarFormulario() {
    this.nuevoRecibido = {
      nombre: '',
      poder: 0
    }
  }

}
