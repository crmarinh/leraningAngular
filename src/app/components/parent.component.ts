import { Component } from '@angular/core';


@Component({
    selector: "app-parent-component",
    template: `
    <div align="center">
        <h1> {{ titulo }} </h1>
        <button type="button" class="btn btn-primary btn-lg" (click)="sumar()">Sumar</button>
        <button type="button" class="btn btn-secondary btn-lg" (click)="restar()">Restar</button>
        <input type="number" [(ngModel)]="minumero">
    </div>
    <div align="center">
        <h4> Resultado </h4>
        <h3> {{ minumero }} </h3>
    </div>
    <hr>
    <app-child-component [minumero]="minumero" (mievento)="recibirElNumeroDeMipadre($event)"></app-child-component>
    `,
    styles: ['button { margin: 10px }']
})
export class ParentComponent {
    titulo: string;
    minumero: number;

    constructor() {
        this.titulo = "hola soy parent";
        this.minumero = 0;
    }

    recibirElNumeroDeMipadre(miNumero: number):void {
        this.minumero = miNumero;
    }

    sumar() {
        this.minumero++;
    }

    restar() {
        this.minumero = (this.minumero <= 0) ? this.minumero :  this.minumero - 1;
    }
}