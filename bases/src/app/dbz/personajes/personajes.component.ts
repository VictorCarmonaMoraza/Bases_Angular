import { DbzService } from './../../services/dbz.service';
import { Personaje } from './../../Interfaces/Personaje';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private dbzService:DbzService){}

  //Get + nombrePropiedad que despues recorreremos
  get personajesRecibidos() {
    return this.dbzService.personajes;
  }
}
