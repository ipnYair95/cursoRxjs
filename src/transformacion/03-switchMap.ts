import { fromEvent, debounceTime, Observable, mergeMap } from 'rxjs';
import { map, mergeAll, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { User } from '../interfaces/GitHubUsers.interface';


/**
 *  recibe un callback que retornar un observable independiente, pero solamente
 * existira 1 observable. Es decir si se crea uno y anteriormente se genero uno intenro, se sustituye
 * y no lo mantiene como mergeMap
 */

//referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput);
body.append(orderList);

//helpers
const mostrarUsuarios = (usuarios: User[]) => {
    console.log('usuarios', usuarios);
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}


//strems
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => event.target['value']),
    mergeMap<string, Observable<User[]>>(texto => ajax.getJSON(`https://api.github.com/users?q=${texto}`)),
)/* .subscribe(users => {
    mostrarUsuarios(users);
});  */

const url = `https://httpbin.org/delay/1?arg=`;

input$.pipe(
    map(event => event.target['value']),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);