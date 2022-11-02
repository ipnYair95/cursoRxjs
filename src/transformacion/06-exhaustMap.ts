import { interval, fromEvent, exhaustMap, take } from 'rxjs';
 
/**
 *   crear un observable si y solo si, no existe alguna subs interna corriendo
 */
 

 const interval$ = interval(500).pipe( take(3) );
 const click$ = fromEvent( document, 'click');
 
 click$.pipe(
         exhaustMap( () => interval$ )
 ).subscribe(console.log);
 