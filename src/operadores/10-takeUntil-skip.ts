import { interval, fromEvent, takeUntil, skip } from 'rxjs';
import { tap } from 'rxjs/operators';


/**
 * takeUntil: hasta que un observable emite algun valor
 * skip: empieza a cachar despues de omitir n emisiones
 */

const boton = document.createElement('button');

boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter = interval(1000);
//const clickBtn$ = fromEvent( boton , 'click');
const clickBtn$ = fromEvent( boton , 'click').pipe(
    tap( () => console.log("tap antes de skip") ),
    skip(1),
    tap( () => console.log("tap despues de skip") ),
);

counter.pipe(
    takeUntil( clickBtn$ )
).subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log("compelte")
});
