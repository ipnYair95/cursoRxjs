import { interval, fromEvent, sample } from 'rxjs';


/**
 *  agarra el ultimo valor cuando en otro observable le llegue algo     
 */

const interval$ = interval(500);
const click$ = fromEvent( document, 'click' );

interval$.pipe(
    sample(click$)
).subscribe(console.log);
