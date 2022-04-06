import { DbzService } from './../../services/dbz.service';
import { Component} from '@angular/core';
import { Personaje} from 'src/app/Interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(dbzService: DbzService) {
    
  }

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

  agregarNuevoPersonaje(argumento:Personaje) {
    console.log(argumento);
    this.personajes.push(argumento);
  }
}
