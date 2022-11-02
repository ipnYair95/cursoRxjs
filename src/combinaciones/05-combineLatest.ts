import { combineLatest, fromEvent, map } from 'rxjs';


/**
 * combina observables y espera a que todos emitan algo para emitir,
 * cuando esto ocurre se combina el ultimo valor de cada 1 para enviar 
 * la respeusta
 */

/* const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest([
    keyup$,
    click$
]).subscribe(console.log); */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'correo@mail.com';
input2.placeholder = '********';
input2.type = 'password';

const body = document.querySelector('body');
body.append(input1);
body.append(input2);


const getInputAsStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
    map( event => event.target['value'] )
);

combineLatest([
    getInputAsStream(input1),
    getInputAsStream(input2),
]).subscribe( console.log );
