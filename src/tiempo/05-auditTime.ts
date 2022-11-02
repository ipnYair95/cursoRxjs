import { interval, fromEvent, sample, auditTime } from 'rxjs';
import { tap, map } from 'rxjs/operators';


/**
 *  agarra el ultimo valor dado un periodod desde que llego una emision
 * a diferencia del sampleTime, no resetea por emision sino desde el primero escucha
 * y hasta que termina su tiempo despacha
 */

    
const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe( 
    map( ({x}) => x ),
    tap( val => console.log("tap", val) ),
    auditTime(2000)
).subscribe(console.log);
