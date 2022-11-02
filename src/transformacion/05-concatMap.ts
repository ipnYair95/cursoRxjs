import { interval, take, fromEvent } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';


/**
 *  crea observables independientes pero los concatena o los encola y sus valores
 * se iran emitiendo conforme les toque
 */

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click');

click$.pipe(
        concatMap( () => interval$ )
).subscribe(console.log);