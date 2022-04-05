import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  agregar() {
    //Con esto evitamos refresco del navegador
    event.preventDefault();
    console.log('Hola');
  }
}
