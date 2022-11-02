import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

/**
 * cacha un error y devuelve una respuesta custom
 */

const url = 'https://api.github.com/usesssrs?per_page=5';

const fetchPromise = fetch(url);
const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn("Ocurrio un errir");
    return of([])
}

/* fetchPromise
.then( resp => resp.json() )
.then( data => console.log("data", data) )
.catch( err => console.warn('error en usuarios') ); */

/* fetchPromise
    .then( manejaErrores )
    .then(resp => resp.json())
    .then(data => console.log("data", data))
    .catch(err => console.warn('error en usuarios'));   */

ajax(url).pipe(
    map(response => response.response),
    catchError(atrapaError)
).subscribe(resp => {
    console.log(resp);
});