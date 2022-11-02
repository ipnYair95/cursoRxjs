import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


//https://api.github.com/usesssrs?per_page=5    
const url = `https://httpbissssn.org/delay/1`;

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON( url);
const obs2$ = ajax.get( url);

/* obs$.pipe(
    catchError(manejaError)
).subscribe( data =>{
    console.log("data", data);
});

obs2$.pipe(
    catchError(manejaError)
).subscribe( data =>{
    console.log("data", data);
}); */


obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: (val) => console.log("val", val),
    error: (err)  => console.warn("err", err),
    complete: () => console.log("complete")
});

 