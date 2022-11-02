import { distinctUntilChanged, of, from, distinct } from 'rxjs';


/**
 * parecido a distinct pero solo compara el valor anterior si no se repite
 */


 const numeros$ = of(1,1,3,3,2,2,4,4,5,3,1);


 numeros$.pipe(
     distinctUntilChanged(  )
 ).subscribe(console.log);
 
 interface Personaje{
     nombre: string; 
 }
 
 const personajes: Personaje[] = [
     { nombre: 'Megaman' },
     { nombre: 'Megaman' },
     { nombre: 'Zero' },
     { nombre: 'Dr. Willy' },
     { nombre: 'X' },
     { nombre: 'X' },
     { nombre: 'Zero' }, 
 ]
 
 from( personajes ).pipe(
     distinctUntilChanged( (prev,cur) => prev.nombre === cur.nombre )
 ).subscribe( console.log );