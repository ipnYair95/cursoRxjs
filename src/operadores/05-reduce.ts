import { interval, reduce, take } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * sumar valores de cada emision
 */

const totalReducer =  (acumulador: number, actual: number) => acumulador + actual;


interval(1000).pipe(
    take(4),
    tap( console.log ),
    reduce(totalReducer, 5)
).subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete")
});