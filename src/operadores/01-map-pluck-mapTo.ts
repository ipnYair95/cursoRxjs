import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from "rxjs/operators";

/**
 * tranforma valores
 */

/* range(1, 5).pipe(
    map<number,string>((val) => `${val * 10}`)
).subscribe(console.log); */

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
);

const keyUpPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyUp$.pipe(
    mapTo('tecla presioanda')
);

keyUpCode$.subscribe(val => console.log('map', val));
keyUpPluck$.subscribe(val => console.log('pluck', val));
keyUpMapTo$.subscribe(val => console.log('mapTo', val));




