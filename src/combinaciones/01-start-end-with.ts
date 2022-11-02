import { endWith, of, startWith } from 'rxjs';


/**
 * start: fija un valor default para emitir antes de que emita algo el subscribe
 * end: fija un valor por default antes del complete
 */

const numeros$ = of(1,2,3).pipe(
        startWith('a','b','c'),
        endWith('x','y','z')
);

numeros$.subscribe( console.log );