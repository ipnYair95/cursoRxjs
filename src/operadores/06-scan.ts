import { from, reduce, scan } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * es como el reduce pero cada que acumula, devuelve el valor tambien
 */

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;


//reduce

from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log);

//scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log);

//redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}


const user: Usuario[] = [
    { id: 'fer', autenticado: false, token: null },
    { id: 'fer', autenticado: true, token: 'ABC' },
    { id: 'fer', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const ids = state$.pipe(
    map(state => state.id)
);

ids.subscribe(console.log);