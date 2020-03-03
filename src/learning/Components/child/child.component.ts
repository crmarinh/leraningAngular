import { Component } from '@angular/core';


@Component({
    selector: 'app-child-component',
    template: `<h1> {{ title }} </h1>
    <div align="center">
        <button type="button" class="btn btn-primary btn-lg" (click)="multiplicar()" >Mutiplicar</button> 
        <button type="button" class="btn btn-secondary btn-lg" (click)="restar()">Dividir</button>
    </div>
    <div align="center">
        <h4> Resultado </h4>
        <h5> {{ resultado }} </h5>
    </div>
    `,
    styles: [
        'button { margin: 10px }',
    ],
    inputs: ['resultado'],
})
export class childComponent {
    title: string;
    resultado: number;

    constructor() {
        this.title = 'Componente hijo'
    }

    public multiplicar(): void {
        this.resultado++;
    }

    public dividir(): void {
        this.resultado = (this.resultado <= 0) ? this.resultado: this.resultado - 1;
    }
}