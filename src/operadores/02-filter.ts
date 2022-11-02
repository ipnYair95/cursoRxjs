import { range, from, fromEvent } from 'rxjs';
import { filter, map } from "rxjs/operators";

/**
 * filtra elementos
 */

/* 
range(1,10).pipe(
    filter( val => val % 2 === 1 )
).subscribe(console.log); */

range(1,10).pipe(
    filter( (val, i) => {
        console.log("index", i);
        return val % 2 === 1 
    })
).subscribe(console.log);  

interface Personaje{
    tipo: string;
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batmna'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
]

from( personajes ).pipe(
    filter( p => p.tipo !== 'heroe' ),

).subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ),
    filter( key => key === 'Enter' )
);

keyUp$.subscribe( console.log );