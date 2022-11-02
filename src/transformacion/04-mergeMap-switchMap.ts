import { fromEvent, interval, mergeMap } from 'rxjs';
import { switchMap } from 'rxjs/operators';


/**
 * con merge map, nos van a llegar los observables de todos los clciks
 * con switchMap, tendremos solamente el ultimo
 */


const click$ = fromEvent(document,'click');
const interval$ = interval(1000);


click$.pipe(
    switchMap( () => interval$ )
).subscribe(console.log);
