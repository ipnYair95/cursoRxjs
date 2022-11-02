import { debounceTime, fromEvent, distinct, distinctUntilChanged } from 'rxjs';
import { map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe(console.log);

// Ejemplo2

const input = document.createElement('input');

const body = document.querySelector('body')

body.append(input);

const input$ = fromEvent<any>( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    map( val => val.target.value),
    distinctUntilChanged()
).subscribe( console.log );