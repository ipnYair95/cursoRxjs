import { of, interval, take, delay, forkJoin } from 'rxjs';


/**
 * mezcla observables finitos, y despacha la ultima respuesta de cada uno como arreglo u obj
 * en cuanto todos se completan
 */

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(
    take(3)
);

const letras$ = of('a', 'b', 'c', 'd').pipe(
    delay(3500)
);


/* forkJoin([
    numeros$,
    intervalo$,
    letras$,
]).subscribe(console.log); */


/* forkJoin([
    numeros$,
    intervalo$,
    letras$,
]).subscribe(resp =>{
    console.log('numeros', resp[0]);
    console.log('intervalo', resp[1]);
    console.log('letras', resp[2]);
}); */

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$,
}).subscribe(resp =>{
    console.log(resp);
});