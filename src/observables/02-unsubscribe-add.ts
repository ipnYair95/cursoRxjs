import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log("siguiente: ", value),
    error: (err) => console.warn("error", err),
    complete: () => console.info("completado")

}

const intervalo$ = new Observable<number>( subs =>{
    let i = 0;
    const interval = setInterval( () =>{
        i++;
        subs.next(i);
        console.log("sigue");
    },1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () =>{
        clearInterval(interval);
        console.log("liberado");
    }

});

const subscription = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

subscription.add( subscription2 );
subscription.add(subscription3);

setTimeout(() =>{
    subscription.unsubscribe();
    /* subscription2.unsubscribe();
    subscription3.unsubscribe(); */
    console.log("completado timeout");
},3000);