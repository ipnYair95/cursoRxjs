import { fromEvent, mergeMap, of, exhaustMap } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


//helper
const peticionHttpLogin =  (userPass) => ajax.post(`https://reqres.in/api/login?delay=1`, userPass).pipe(
        map( resp => resp.response['token'] ),
        catchError( err => of('xxx') ) 
);

// creando un formulario 
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submit = document.createElement('button');

//configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submit.innerHTML = 'Ingresar';

form.append(inputEmail);
form.append(inputPass);
form.append(submit);

document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
        tap(ev => ev.preventDefault()),
        map(ev => ({
                email: ev.target[0].value,
                password: ev.target[1].value
        })),
        //mergeMap( peticionHttpLogin )
        //switchMap( peticionHttpLogin )
        exhaustMap( peticionHttpLogin )
);

submitForm$.subscribe(token => {
        console.log(token);
});



