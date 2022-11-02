import { fromEvent, merge } from 'rxjs';


/**
 * permite mezclar varios observables y escuchar sus emisiones, sin importar
 * que alguno termine
 */

const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

merge(keyup$, click$).subscribe( console.log );