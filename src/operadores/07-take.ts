import { of, take } from 'rxjs';
import { tap } from 'rxjs/operators';


/**
 * pide la cantidad de emisiones a tomar 
 */

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap( t => console.log("tap", t) ),
    take(3)
).subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("compelte")
});

