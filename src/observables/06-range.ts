import { range, asyncScheduler } from "rxjs";

// emite valores secuenciales dado un intervalo
const src$ = range( 1,5, asyncScheduler );

console.log("inicio del observable");
src$.subscribe( resp =>{
    console.log(resp);
});
console.log("fin del observable");

 