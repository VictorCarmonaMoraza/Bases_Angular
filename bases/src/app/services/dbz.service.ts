import { Injectable } from '@angular/core';
import { Personaje } from '../Interfaces/Personaje';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Arreglo de personajes
  private _personajes: Personaje[] = [
    { nombre: 'Krillim', poder: 700 },
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 8500 }
  ];
  get personajes():Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio Inicializado')
   }
}
