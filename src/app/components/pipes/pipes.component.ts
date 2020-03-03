import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface Person {
  nombre: string;
  apellido: string;
}

export interface Heroe {
  nombre: string;
  poder: string;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  upper: string = "Marlon visajai";
  texto: string = "titulo de mi libro";
  person: Person = {
    nombre: "Cristian",
    apellido : "Marin"
  };

  mensaje: any;

  minumero:number = 3.141516;
  laslukas: number = 2000000;
  mifecha: number = Date.now();

  heroes: Heroe[] = [ {
    nombre: 'Superman',
    poder: 'volar'
  },{
    nombre: 'Marlon',
    poder: 'visaje'
  },{
    nombre: 'Batman',
    poder: 'dinero'
  },{
    nombre: 'Cristian',
    poder: 'volar'
  }]

  constructor() { 
    this.mensaje = of('soy un observable').pipe(
      delay(5000)
    );
  }

  ngOnInit() {
  }

  cambioDeArray() {
    this.heroes.push({
      nombre: 'vector',
      poder: 'paz'
    })
  }

  cambio() {
    console.log('vacio')
  }

}
