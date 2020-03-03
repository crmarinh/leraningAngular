import { PipeTransform, Pipe } from '@angular/core';
import { Heroe } from './pipes.component';


@Pipe({
    name: 'flying', 
    pure: false
})
export class TuberiaHeroesVoladores implements PipeTransform{
    transform(value: Heroe[], arg: string, arg2:string) {
        console.log("hola soy el pipe")
        return value.map(heroe => {
            heroe.poder =  arg2
            return heroe
        })
    }
}