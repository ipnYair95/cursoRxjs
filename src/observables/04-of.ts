import { of } from "rxjs";

//observable a partir de un arreglo

//const obs$ = of( 1,2,3,4,5,6 );
const obs$ = of<number[]>(...[1,2,3,4,5,6]);


console.log("inicio del obs");
obs$.subscribe({
    next: (resp) => console.log("next", resp),
    error: () => null,
    complete: () => console.log("terminamos")
});
console.log("fin del obs");