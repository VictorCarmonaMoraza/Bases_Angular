import { Personaje } from './../../Interfaces/Personaje';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Input() personajesRecibidos:Personaje[]=[]


}
