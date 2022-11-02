import { mergeMap, of, interval, take, fromEvent, takeUntil } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * crea un observable independiente que sera despachado por el subscribe superior y este va a 
 * recibir todas las emisiones de los observables creados internamente, a diferencia
 * de mergeAll este recibe un callback
 */

const letras$ = of('a', 'b', 'c');

/* letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3))
    )
).subscribe({
    next: (resp) => console.log("valor", resp),
    complete: () => console.log("complete")
});
 */

const mouseDown$ = fromEvent( document, 'mousedown' );
const mouseUp$ = fromEvent( document, 'mouseup' );
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe( takeUntil( mouseUp$ ) ) )
).subscribe(console.log);

