import { Component } from '@angular/core';


@Component({
    selector: 'app-parent-component',
    template: `<h1> {{ title }} </h1>
    <div align="center">
        <button type="button" class="btn btn-primary btn-lg" (click)="sumar()" >Sumar</button> 
        <button type="button" class="btn btn-secondary btn-lg" (click)="restar()">Restar</button>
    </div>
    <div align="center">
        <h4> Resultado </h4>
        <h5> {{ resultado }} </h5>
    </div>
    <hr/>
    <app-child-component [resultado]="resultado"></app-child-component>
    `,
    styles: [
        'button { margin: 10px }',
    ]
})
export class ParentComponent {
    title: string;
    resultado = 0;

    constructor() {
        this.title = 'Componente padre'
    }

    public sumar(): void {
        this.resultado++;
    }

    public restar(): void {
        this.resultado = (this.resultado <= 0) ? this.resultado: this.resultado - 1;
    }
}