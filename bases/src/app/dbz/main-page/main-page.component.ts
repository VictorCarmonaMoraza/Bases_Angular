import { Component } from '@angular/core';
import { Personaje } from 'src/app/Interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //Para poner por defecto los campos vacios
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
}
