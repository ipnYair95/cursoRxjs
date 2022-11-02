import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log("siguiente: ", value),
    error: (err) => console.warn("error", err),
    complete: () => console.info("completado")

}
 

const intervalo$ = new Observable<number>( subs =>{
    const intervalID = setInterval( () =>{
        subs.next( Math.random() );
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log("intervalo destruido");
    }
});

/* const subs1 = intervalo$.subscribe( resp => console.log( `Subs 1: ${resp}` ));
const subs2 = intervalo$.subscribe( resp => console.log( `Subs 2: ${resp}` ) ); */  

const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);