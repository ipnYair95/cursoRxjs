import { debounceTime, fromEvent, distinct, distinctUntilChanged, asyncScheduler } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
/**
 *  ignora los elementos siguientes dado un tiempo
 */


 
 const click$ = fromEvent<MouseEvent>( document, 'click');
 
 click$.pipe(
     throttleTime(3000)
 ).subscribe(console.log);
 
 // Ejemplo2
 
 const input = document.createElement('input');
 
 const body = document.querySelector('body')
 
 body.append(input);
 
 const input$ = fromEvent<any>( input, 'keyup' );
 
 input$.pipe(
     throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
     }),
     map( val => val.target.value),
     distinctUntilChanged()
 ).subscribe( console.log );