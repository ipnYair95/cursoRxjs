import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log("siguiente: ", value),
    error: (err) => console.warn("error", err),
    complete: () => console.info("completado")

}

//const  obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //forzar un error
    //const a = undefined;
    //a.nombre = 'Doe';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');


});

/* obs$.subscribe({
    next: (valor)  => console.log('next', valor),
    error: (err) => console.warn('error', err),
    complete: () => console.log("complete")
});
 */

obs$.subscribe( observer );
