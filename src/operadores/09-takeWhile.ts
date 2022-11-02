import { fromEvent } from 'rxjs'; 
import { map, takeWhile } from 'rxjs/operators';

/**
 * emite valores mientra se cumpla algo
 */

const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(
    map( ({x,y}) => ({x,y}) ),
    //takeWhile( ({y}) => y <= 150 )
    takeWhile( ({y}) => y <= 150, true ) // le decimos que tome el ultimo valor para el next
).subscribe({
    next: val => console.log("next", val),
    complete: () => console.log("complete")
});