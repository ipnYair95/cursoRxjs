import { fromEvent, debounceTime, Observable } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';  
import { User } from '../interfaces/GitHubUsers.interface';
 

/**
 * combina varios observables en 1, creando uno nuevo 
 */

//referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput);
body.append(orderList);

//helpers
const mostrarUsuarios = (usuarios: User[]) =>{
    console.log('usuarios',usuarios);
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
    map<string, Observable<User[]>>(texto => ajax.getJSON(`https://api.github.com/users?q=${texto}`)),
    mergeAll()
).subscribe(users => {
    mostrarUsuarios(users);
}); 

