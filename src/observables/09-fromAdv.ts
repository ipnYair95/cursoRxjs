import { of, from } from "rxjs";

/**
 * of = tomar argumentos y genera una secuencia
 * from = crea un obs con array, promise
 */


const observer = {
    next: (resp) =>  console.log("next", resp),
    complete: () => console.log("complete")
}

//const source$ =  from([1,2,3,4,5]);
//const source$ =  of(...[1,2,3,4,5]);
//const source$ =  of('Yair');

const source$ = from( fetch( 'https://api.github.com/users/klerith' ) );

/* source$.subscribe( async (resp) =>{
    console.log(resp);
    const dataResp =  await resp.json();
    console.log(dataResp);   
}); */

//source$.subscribe( observer );

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

const miIterable = miGenerador();

from(miIterable).subscribe( observer );