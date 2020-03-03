import { Component, EventEmitter, Input } from '@angular/core';


@Component({
    selector: "app-child-component",
    template: `
    <div align="center">
        <h1> {{ titulo }} </h1>
        <button type="button" class="btn btn-primary btn-lg" (click)="multiplicar()">Multiplicar</button>
        <button type="button" class="btn btn-secondary btn-lg" (click)="dividir()">Dividir</button>
    </div>
    <div align="center">
        <h4> Resultado </h4>
        <h3> {{ minumero }} </h3>
    </div>
    `,
    styles: ['button { margin: 10px }'],
    outputs: ['mievento']
})
export class ChildComponent {
    titulo: string;
    @Input() minumero: number;

    mievento: EventEmitter<number>;

    constructor() {
        this.mievento = new EventEmitter();
        this.titulo = "hola soy child";
        this.minumero = 0;
    }

    multiplicar() {
        this.minumero = this.minumero *2;
        this.mievento.emit(this.minumero)
    }

    dividir() {
        this.minumero = (this.minumero <= 1) ? this.minumero :  this.minumero / 2;
        this.mievento.emit(this.minumero)
    }
}