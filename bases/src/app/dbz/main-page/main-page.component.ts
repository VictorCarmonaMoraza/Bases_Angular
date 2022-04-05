import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/Interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //Arreglo de personajes
  personajes: Personaje[] = [
    {nombre:'Krillim', poder:700},
    { nombre: 'Goku', poder: 15000},
    { nombre: 'Vegeta', poder: 8500}
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    //Si el campo nombre esta vacio salimos del metodo agregar
    if (this.nuevo.nombre.trim().length ===0) {
      return;
   }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {nombre:'',poder:0}
  }
}
