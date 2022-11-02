import { concat, interval, take, of } from 'rxjs';


/**
 * encadena observables y espera a que termine uno apra empezar el otro,
 * si alguno no se completa se queda ahi
 */

const interval$ = interval(1000);

concat(
        interval$.pipe(take(3)),
        interval$.pipe(take(2)),
        of(['ultimo'])
).subscribe( console.log );