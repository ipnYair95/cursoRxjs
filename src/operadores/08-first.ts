import { first, fromEvent, take } from 'rxjs';
import { tap, map } from 'rxjs/operators';



/**
 *  toma el primer valor y completa o tambien dada una condicion
 */


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    /* map( event => ({
        clientY: event.clientY,
        clientX: event.clientX  
    })) */
    map( ({ clientY, clientX }) =>({ clientY, clientX })),
    first( event => event.clientY >= 150 )
).subscribe({
    next: val => console.log("next", val),
    complete: () => console.log("complete")
});

