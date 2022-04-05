import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/Interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  agregar() {
    //Con esto evitamos refresco del navegador
    //event.preventDefault();
    console.log(this.nuevo);
  }
}
